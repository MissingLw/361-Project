import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CreatehListingPage() {

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const history = useHistory();

  const addhListing = async () => {
    const newhListing = {title, address, city, description, date};
    const response = await fetch('/hListings', {
      method: 'POST',
      body: JSON.stringify(newhListing),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 201) {
      alert(`Listing has been added! status code = ${response.status}`);
    } else {
      alert(`Failed to add listing, status code = ${response.status}`);
    }
    history.push('/');
  }

  return (
    <div>
      <h1>Create a Hoursing Listing</h1>
      <p>Fill out the information below to post your Listing</p>
        <fieldset>
        <legend>Information Needed:</legend>
        <br></br>
          <label for="title">Title:</label> 
          <input id="title"
            type="text"
            placeholder="placeholder"
            value={title}
            onChange={e => setTitle(e.target.value)}
          /> <br/>
          <br></br>
          <legend>What is the Address of the Apartment?</legend>
          <br></br>
          <label for="address">Address:</label> 
          <input id="address"
            type="text"
            placeholder="placeholder"
            value={address}
            onChange={e => setAddress(e.target.value)}
          /> <br/>
          <br></br>
          <legend>What City is it in?</legend>
          <br></br>
          <label for="city">City:</label> 
          <input id="city"
            type="text"
            placeholder="placeholder"
            value={city}
            onChange={e => setCity(e.target.value)}
          /> <br/>
          <br></br>
          <legend>Create Listing Description</legend>
          <br></br>
          <label for="description">Description:</label> 
          <input id="description"
            type="text"
            placeholder="placeholder"
            value={description}
            onChange={e => setDescription(e.target.value)}
          /> <br/>
          <br></br>
          <legend>Input Today's Date</legend>
          <br></br>
          <label for="date">Date:</label> 
          <input id="date"
            type="text"
            placeholder="02-01-2022"
            value={date}
            onChange={e => setDate(e.target.value)}
          /> <br/>
          <br></br>
          <label for="image">Images (NOT YET ADDED):</label> 
          <input id="image"
            type="text"
            placeholder="NA"
            value={"NA"}
            onChange={e => setDate(e.target.value)}
          /> <br/>
          <br></br>


          <button onClick={addhListing}> Create </button>

        </fieldset>

    </div>
  )
}