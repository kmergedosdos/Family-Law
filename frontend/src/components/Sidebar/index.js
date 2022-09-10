import './index.css';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({client}) => {
   return (
      <div className='sidebar'>
         <div className='sidebar_tools'>
            <Link className='sidebar_tools_exit' to='/'>Exit</Link>
         </div>
         <h2 className='sidebar_header'>{client}</h2>
         <nav className='sidebar_nav'>
            <NavLink className='sidebar_nav_item' to='/documents' state={{ client }}>Documents</NavLink>
            <NavLink className='sidebar_nav_item' to='/billing' state={{ client }}>Billing</NavLink>
            <NavLink className='sidebar_nav_item' to='/tasks' state={{ client }}>Tasks</NavLink>
            <NavLink className='sidebar_nav_item' to='/communications' state={{ client }}>Communications</NavLink>
            <NavLink className='sidebar_nav_item' to='/calendar' state={{ client }}>Calendar</NavLink>
         </nav>
      </div>
   );
}

export default Sidebar;