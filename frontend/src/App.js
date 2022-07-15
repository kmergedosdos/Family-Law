import Overview from './pages/Overview';
import Tasks from './pages/Tasks';
import Documents from './pages/Documents';
import Billing from "./pages/Billing";
import Communications from './pages/Communications';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='/documents' element={<Documents/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/communications' element={<Communications/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
