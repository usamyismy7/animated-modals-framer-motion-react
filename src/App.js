import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Modals from './Modals.js';
import Scroll from './Scroll.js';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/modals">Modals</Link>
        <Link to="/scroll">Scroll</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Sorry your page was not found</p>
    </div>
  );
}