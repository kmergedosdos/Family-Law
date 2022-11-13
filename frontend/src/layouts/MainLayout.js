import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import './styles.css';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="main-layout">
      {
        location.pathname !== "/" &&
        <Sidebar client={location.state.client}/>
      }
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;