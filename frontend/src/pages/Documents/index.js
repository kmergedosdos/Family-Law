import './index.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import DocumentsTab from '../../components/DocumentsTab';
import QuestionnairesList from '../../components/QuestionnairesList';
import FillFields from '../../components/FillFields';
import Sidebar from '../../components/Sidebar';

const Documents = () => {
   const { client } = useLocation().state;
   const [currentTab, setCurrentTab] = useState("Documents");

   function switchTabTo(newTab) {
      setCurrentTab(newTab);
   }

   return (
      <div className='layout'>
         <div className='main-section'>
            <Sidebar client={client}/>
            <section className='content'>
               <div className='documents'>
                  <nav className='documents_topbar'>
                     <div
                        className={`documents_topbar_item ${currentTab === "Documents" ? "active": ""}`}
                        onClick={() => switchTabTo("Documents")}
                     >
                        Documents
                     </div>
                     <div
                        className={`documents_topbar_item ${currentTab === "Questionnaires" ? "active": ""}`}
                        onClick={() => switchTabTo("Questionnaires")}
                     >
                        Questionnaires
                     </div>
                     <div
                        className={`documents_topbar_item ${currentTab === "Fill Fields" ? "active": ""}`}
                        onClick={() => switchTabTo("Fill Fields")}
                     >
                        Fill Fields
                     </div>
                  </nav>
                  <section className='documents_content'>
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