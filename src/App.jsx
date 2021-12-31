import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth, Home, Profile } from './pages';

import { Navbar } from './components/Shared/index';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
