import Overview from './pages/Overview';
import Documents from './pages/Documents';
import Questionnaire from './pages/Questionnaire';
import Tasks from './pages/Tasks';
import Billing from './pages/Billing';
import Invoices from './pages/Invoices';
import Communications from './pages/Communications';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocumentsLayout from './layouts/DocumentsLayout';
import MainLayout from './layouts/MainLayout';
import FillFields from './pages/FillFields';
import BillingsLayout from './layouts/BillingsLayout';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Overview/> } />
            <Route path='documents' element={<DocumentsLayout />}>
              <Route index element={<Documents />} />
              <Route path='questionnaire' element={<Questionnaire />} />
              <Route path='fill-fields' element={<FillFields />} />
            </Route>
            <Route path='tasks' element={<Tasks/>}/>
            <Route path='billing' element={<BillingsLayout />}>
              <Route index element={<Billing/>}/>
              <Route path='invoices' element={<Invoices />}/>
            </Route>
            <Route path='communications' element={<Communications/>}/>
            <Route path='calendar' element={<Calendar/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
