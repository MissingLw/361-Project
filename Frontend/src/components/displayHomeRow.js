import { MdOpenInNew } from 'react-icons/md'

export default function DisplayHomeRow({ hListing, onEdit, onView}) {
  return (
    <tr>
      <td><MdOpenInNew className="icon" onClick={ () => onView(hListing) }/></td>
      <td>{hListing.title}</td>
      <td>{hListing.image}</td>
      <td>{hListing.date}</td>
    </tr>
  )
}