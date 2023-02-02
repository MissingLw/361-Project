import express from 'express';
import 'dotenv/config';
import * as hListings from './spacemates-model.mjs';  

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// CREATE controller ******************************************
app.post('/hlistings', (req, res) => {
  hListings.createListing(
    req.body.title,
    req.body.address,
    req.body.city,
    req.body.description,
    req.body.date,
    req.body.image
  )
  // console.log(hListing)
    .then(hListing => {
      console.log("then hListing message"),
      res.status(201).json(hListing);
    })
    .catch(error => {
      console.error(error);
      res.status(400).json({ Error: 'Creation of a document failed due to invalid syntax.' })
    });

});

// RETRIEVE controller ****************************************************
// GET hListings by ID
app.get('/hListings/:_id', (req, res) => {
  const hListingId = req.params._id;
  hListings.findListingsByID(hListingId)
    .then(hListing => { 
      if (hListing !== null) {
        res.json(hListing);
      } else {
        res.status(404).json({ Error: 'Document not found' });
      }         
    })
    .catch(error => {
      res.status(400).json({ Error: 'Request to retrieve document failed' });
    });
});

// GET hListings filtered
app.get('/hListings', (req, res) => {
  let filter = {};
  // filter by title
  if(req.query.title !== undefined){
      filter = { title: req.query.title };
  }
  // filter by address
  if(req.query.address !== undefined){
    filter = { address: req.query.address };
}
  // filter by city
  if(req.query.city !== undefined){
    filter = { city: req.query.city };
}
  // filter by description
  if(req.query.description !== undefined){
    filter = { description: req.query.description };
}
  // filter by date
  if(req.query.date !== undefined){
      filter = { date: req.query.date };
  }
  hListings.findListings(filter, '', 0)
      .then(hListings => {
          res.send(hListings);
      })
      .catch(error => {
          console.error(error);
          res.send({ Error: 'Request to retrieve documents failed (GET hListings filtered)' });
      });

});


// DELETE Controller ******************************
app.delete('/hListings/:_id', (req, res) => {
  hListings.deleteListing(req.params._id)
    .then(deletedCount => {
      if (deletedCount === 1) {
        res.status(204).send()
      } else {
        res.status(404).json({ Error: 'Document not found' })
      }
    })
    .catch(error => {
      console.error(error)
      res.status(400).json({ Error: 'Request to delete listing failed'  })
    });

});


// UPDATE controller ************************************
app.put('/hListings/:_id', (req, res) => {
  hListings.replaceListing(
    req.params._id,
    req.body.title,
    req.body.address,
    req.body.city,
    req.body.description,
    req.body.date,
    req.body.image
  )
  .then(numUpdated => {
    if (numUpdated === 1) {
      res.json({
        _id: req.params._id,
        title: req.body.title,
        address: req.body.address,
        city: req.body.city,
        description: req.body.description,
        date: req.body.date,
        image: req.body.image
      })
    } else {
      res.status(404).json({ Error: 'Document not found (replaceListing)' })
    }
  })
    .catch(error => {
      console.error(error)
      res.status(400).json({ Error: 'Request to update a document failed' })
    });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});