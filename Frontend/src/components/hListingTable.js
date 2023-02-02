import HListingRow from '../components/hListingRow.js'

export default function HListingTable({ hListings, onDelete, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
        <th> </th>
          <th> Title </th>
          <th> Address </th>
          <th> City </th>
          <th> Description </th>
          <th> Date </th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {hListings.map((hListing, i) => <HListingRow hListing={hListing} onDelete={onDelete} onEdit={onEdit} key={i}/> )}
      </tbody>
    </table>
  );
}