import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import HListingTable from '../components/hListingTable.js';
import DisplayHomeTable from '../components/displayHomeTable';

export default function HomePage({ sethListingToEdit }) {

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
    console.log("Edit clicked")
    sethListingToEdit(hListing);
    history.push('/edit');
  };


  const onView = hListing => {
    sethListingToEdit(hListing);
    history.push('/viewListing');
    
  };

  return (
    <>
      <h1>Housing Search Application</h1>
      <p></p>
      <p>Listings Near You  <Link to='/explore'>Explore Listings</Link></p>
      <DisplayHomeTable hListings={hListings} onView={onView}/>
      <br/>
      <Link to='/explore'>Saved Listings</Link>
      <p>No listings are currently saved, explore listings <Link to='/explore'>here</Link> </p>
    </>
  )
}