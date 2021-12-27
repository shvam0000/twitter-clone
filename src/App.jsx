import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthForm } from './pages';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<AuthForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
