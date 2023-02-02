import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import HListingTable from '../components/hListingTable.js';

export default function MyProfile({ sethListingToEdit }) {

  const history = useHistory();

  const [hListings, sethListings] = useState([]);

  const loadhListings = async () => {
    const response = await fetch('/hListings');
    const data = await response.json();
    sethListings(data);
  }
  useEffect(() =>  loadhListings(), []);
  const onDelete = async _id => {

    const confirmation = window.confirm("Are you sure you want to delete this?");
    if (!confirmation){
      console.log('user desided not to delete the row')
      return
    }
    const response = await fetch(`/hListings/${_id}`, {method: 'DELETE'});
    if (response.status === 204) {
      sethListings(hListings.filter(e => e._id !== _id));
    } else {
      console.error(`Failed to delete listing with _id ${_id} with status \
        code = ${response.status}`)
    }
  };

  const onEdit = hListing => {
    sethListingToEdit(hListing);
    history.push('/edit');
  };

  return (
    <>
      <h1>User Profile</h1>
      <Link to='/MyListings'>Manage Your Listings</Link>
      <br/>
    </>
  )
}