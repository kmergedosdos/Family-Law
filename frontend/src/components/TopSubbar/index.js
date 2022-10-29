import { NavLink, useLocation } from 'react-router-dom';
import './index.css';

const TopSubbar = ({ navItems }) => {
  const location = useLocation();

  return (
    <nav className='top-subbar'>
      {
        navItems.map((item, i) => {
          return (
            <NavLink
              key={`${item.name}${i}`}
              to={item.location}
              state={{client: location.state.client}}
              className='top-subbar_item'
              end
            >
              {item.name}
            </NavLink>
          );
        })
      }
    </nav>
  );
}

export default TopSubbar;