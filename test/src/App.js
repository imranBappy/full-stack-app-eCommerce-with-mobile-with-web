import * as React from 'react';
import { Routes, Route, useParams, BrowserRouter, Link } from 'react-router-dom';

function ProfilePage() {
  console.log('ProfilePage');
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Profile Page</h1>
    </div>
  )
}
function Home() {
  console.log('Home');

  return (
    <div>
      <Link to="/profile">Profile</Link>
      <h1>Home Page</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;