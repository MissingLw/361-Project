import { MdDeleteForever, MdModeEdit, MdOpenInNew } from 'react-icons/md'

export default function HListingRow({ hListing, onDelete, onEdit }) {
  return (
    <tr>
      <td><MdOpenInNew className="icon" onClick={ () => onEdit(hListing) }/></td>
      <td>{hListing.title}</td>
      <td>{hListing.address}</td>
      <td>{hListing.city}</td>
      <td>{hListing.description}</td>
      <td>{hListing.date}</td>
      <td><MdModeEdit className="icon" onClick={ () => onEdit(hListing) }/></td>
      <td><MdDeleteForever className="icon" onClick={ () => onDelete(hListing._id) }/></td>
    </tr>
  )
}