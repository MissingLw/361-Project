import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function EdithListingPage({ hListingToEdit }) {

  const history = useHistory();

  const [title, setTitle] = useState(hListingToEdit.title);
  const [address, setAddress] = useState(hListingToEdit.address);
  const [city, setCity] = useState(hListingToEdit.city);
  const [description, setDescription] = useState(hListingToEdit.description);
  const [date, setDate] = useState(hListingToEdit.date);
  const [image, setImage] = useState(hListingToEdit.image)

  const edithListing = async () => {
    const updatedhListing = {title, address, city, description, date, image};

    const response = await fetch(`/hListings/${hListingToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedhListing),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      alert("Listing has been edited! status code = ${response.status}");
    } else {
      alert(`Failed to edit Listing, status code = ${response.status}`);
    }
    history.push('/');
  }

  return (
    <div>
      <h1>Edit a Listing</h1>

        <fieldset>

          <label for="title">Listing Title</label> 
          <input id="title"
            type="text"
            placeholder="placeholder  "
            value={title}
            onChange={e => setTitle(e.target.value)}
          /> <br/>

          <label for="address">Address</label> 
          <input id="address"
            type="text"
            placeholder="placeholder  "
            value={address}
            onChange={e => setAddress(e.target.value)}
          /> <br/>

          <label for="city">City</label> 
          <input id="city"
            type="text"
            placeholder="placeholder  "
            value={city}
            onChange={e => setCity(e.target.value)}
          /> <br/>

          <label for="description">Description</label> 
          <input id="description"
            type="text"
            placeholder="placeholder  "
            value={description}
            onChange={e => setDescription(e.target.value)}
          /> <br/>

          <label for="date">Date</label> 
          <input id="date"
            type="text"
            placeholder="12-07-2022"
            value={date}
            onChange={e => setDate(e.target.value)}
          /> <br/>

          <label for="image">Images (NOT YET ADDED)</label> 
          <input id="image"
            type="text"
            placeholder="N/A"
            value={image}
            onChange={e => setImage(e.target.value)}
          /> <br/>

          <button onClick={edithListing}> Save </button>

        </fieldset>

    </div>
  )

};