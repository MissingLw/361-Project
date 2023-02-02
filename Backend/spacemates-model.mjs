// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
  process.env.MONGODB_CONNECT_STRING,
  { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
  if(err){
      res.status(500).json({ error: '500:Connection to the server failed.' });
  } else  {
      console.log('Successfully connected to MongoDB hListing collection using Mongoose.');
  }
});

// SCHEMA: Define the collection's schema.
const housingListingSchema = mongoose.Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  image: {type:String, required: false}
});

// Compile the model from the schema.
const HListing = mongoose.model('hListing', housingListingSchema);

// CREATE model *****************************************
const createListing = async (title, address, city, description, date, image) => {
  const hListing = new HListing({
    title: title,
    address: address,
    city: city,
    description: description,
    date: date,
    image: image
  });
  return hListing.save();
}

// hListing.createListing("title", "address", "city", "description", "date")

// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const findListings = async (filter) => {
  const query = HListing.find(filter)
  return query.exec();
}

// Retrieve based on the ID and return a promise.
const findListingsByID = async (_id) => {
  const query = HListing.findById(_id);
  return query.exec();
}



// DELETE model based on ID  *****************************************
const deleteListing = async (_id) => {
  const result = await HListing.deleteOne({_id: _id})
  return result.deletedCount;
}

// REPLACE model *****************************************************
const replaceListing = async (_id, title, address, city, description, date, image) => {
  const result = await HListing.replaceOne({_id: _id}, {
    title: title,
    address: address,
    city: city,
    description: description,
    date: date,
    image: image
  });
  return result.nModified;
}


// Export our variables for use in the controller file.
export { createListing, findListings, findListingsByID, replaceListing, deleteListing }