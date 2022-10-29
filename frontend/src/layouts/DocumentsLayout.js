import { Outlet } from "react-router-dom";
import TopSubbar from '../components/TopSubbar';

const DocumentsLayout = () => {
  const navItems = [
    {
      location: "/documents",
      name: "documents"
    },
    {
      location: "/documents/questionnaire",
      name: "questionnaires"
    },
    {
      location: "/documents/fill-fields",
      name: "fill fields"
    }
  ]

  return (
    <div>
      <TopSubbar navItems={navItems}/>
      <Outlet />
    </div>
  );
}

export default DocumentsLayout;