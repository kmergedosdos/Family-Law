import { Link } from 'react-router-dom';

const Calendar = () => {
   const client = "John Smith";

   return (
      <div className='layout'>
         <header className='header--section'>
            <Link to='/'>Back</Link>
         </header>
         <div className='main--section'>
            <div className='sidebar'>
               <h2>{client}</h2>
               <nav>
                  <Link to='/documents'>Documents</Link>
                  <Link to='/tasks'>Tasks</Link>
                  <Link  to='/billing'>Billing</Link>
                  <Link to='/communications'>Communications</Link>
                  <Link  to='/calendar'>Calendar</Link>
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