import { Link } from 'react-router-dom';

const Communications = () => {
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
                  <Link to='/documents' state={{ client }}>Documents</Link>
                  <Link to='/tasks'>Tasks</Link>
                  <Link  to='/billing'>Billing</Link>
                  <Link to='/communications'>Communications</Link>
                  <Link  to='/calendar'>Calendar</Link>
               </nav>
            </div>
            <section className='content'>
               Commuincations
            </section>
         </div>
      </div>
   );
}

export default Communications;