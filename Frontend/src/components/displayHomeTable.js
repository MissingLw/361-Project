import DisplayHomeRow from '../components/displayHomeRow.js'

export default function DisplayHomeTable({ hListings, onEdit, onView}) {
  return (
    <table>
      <thead>
        <tr>
        <th> </th>
          <th> Title </th>
          <th> Image </th>
          <th> Date </th>
        </tr>
      </thead>
      <tbody>
        {hListings.map((hListing, i) => <DisplayHomeRow hListing={hListing} onView={onView} key={i}/> )}
      </tbody>
    </table>
  );
}