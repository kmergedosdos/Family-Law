import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import DocumentsTab from '../../components/DocumentsTab';
import QuestionnairesList from '../../components/QuestionnairesList';
import FillFields from '../../components/FillFields';

const Documents = () => {
   const { client } = useLocation().state;
   const [currentTab, setCurrentTab] = useState("Documents");

   function switchTabTo(newTab) {
      setCurrentTab(newTab);
   }

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
               <div className='documents--content--container'>
                  <nav className='topbar'>
                     <div className='topbar--item' onClick={() => switchTabTo("Documents")}>Documents</div>
                     <div className='topbar--item' onClick={() => switchTabTo("Questionnaires")}>Questionnaires</div>
                     <div className='topbar--item' onClick={() => switchTabTo("Fill Fields")}>Fill Fields</div>
                  </nav>
                  <section>
                     {currentTab === "Documents" && <DocumentsTab />}
                     {currentTab === "Questionnaires" && <QuestionnairesList />}
                     {currentTab === "Fill Fields" && <FillFields />}
                  </section>
               </div>
            </section>
         </div>
      </div>
   );
}

export default Documents;