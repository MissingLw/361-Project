import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function ViewListingPage({ hListingToEdit }) {

  const history = useHistory();

  const [title] = useState(hListingToEdit.title);
  const [address] = useState(hListingToEdit.address);
  const [city] = useState(hListingToEdit.city);
  const [description] = useState(hListingToEdit.description);
  const [date] = useState(hListingToEdit.date);
  const [image] = useState(hListingToEdit.image)

  const edithListing = async () => {
    const updatedhListing = {title, address, city, description, date, image};

    const response = await fetch(`/hListings/${hListingToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedhListing),
      headers: {
        'Content-Type': 'application/json'
      }
    });


  }

  return (
    <div>
      <h1>{title}</h1>

      <p>
        Address: {address}
        City: {city}
        <br></br>
        Date Created: {date}
        <br></br>
        Images (not currently avaliable): {image}
        <br></br>
        Description: {description}
      </p>




    </div>
  )

};