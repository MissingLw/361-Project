// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import './App.css';
import Navigation from './components/Navigation';

// Import Pages
import HomePage from './pages/HomePage.js'
import CreatehListingPage from './pages/CreatehListingPage.js'
import EdithListingPage from './pages/EdithListingPage.js'
import ExplorePage from './pages/ExplorePage'
import SearchPage from './pages/SearchPage.js'
import MyListings from './pages/MyListings.js'
import MyProfile from './pages/MyProfilePage'
import ViewListingPage from './pages/ViewListingPage'

function App() {

  const [hListingToEdit, sethListingToEdit] = useState();

  return (
    <>
      <Router>
          <header>
            <h1>Apartment Search System</h1>
          </header>

        <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage sethListingToEdit={sethListingToEdit} />
            </Route>

            <Route path="/create">
              <CreatehListingPage/>
            </Route>
            
            <Route path="/edit">
              <EdithListingPage hListingToEdit={hListingToEdit} />
            </Route>

            <Route path="/explore">
              <ExplorePage/>
            </Route>

            <Route path="/search">
              <SearchPage/>
            </Route>

            <Route path="/MyListings">
              <MyListings sethListingToEdit={sethListingToEdit} />
            </Route>

            <Route path="/MyProfile">
              <MyProfile/>
            </Route>

            <Route path="/viewListing">
              <ViewListingPage hListingToEdit={hListingToEdit} />
            </Route>
          </main>

          <footer>
            <p>&copy; 2022 Dylan Heard Version 0.1.0 </p>
          </footer>

      </Router>
    </>
  );
}

export default App;