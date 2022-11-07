import { Outlet } from 'react-router-dom';
import TopSubbar from '../components/TopSubbar';

const BillingsLayout = () => {
   const navItems = [
      {
         location: "/billing",
         name: "billables"
      },
      {
         location: "/billing/invoices",
         name: "invoices"
      }
   ]

   return (
     <>
         <TopSubbar navItems={navItems} />
         <div className='outlet-container'>
            <Outlet />
         </div>
      </>
   )
}

export default BillingsLayout;