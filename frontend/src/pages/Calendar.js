import { Link, useLocation } from 'react-router-dom';

const Calendar = () => {
   const { client } = useLocation().state;

   return (
      <div className='layout'>
         <header className='header--section'>
            <Link to='/'>Back</Link>
         </header>
         <div className='main--section'>
            <div className='sidebar'>
               <h2>{client}</h2>
               <nav>
                  <Link to='/documents' state={{ client }}>Documents</Link>
                  <Link to='/tasks' state={{ client }}>Tasks</Link>
                  <Link  to='/billing' state={{ client }}>Billing</Link>
                  <Link to='/communications' state={{ client }}>Communications</Link>
                  <Link  to='/calendar' state={{ client }}>Calendar</Link>
               </nav>
            </div>
            <section className='content'>
               Calendar
            </section>
         </div>
      </div>
   );
}

export default Calendar;