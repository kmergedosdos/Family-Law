import './index.css';
import { Link } from 'react-router-dom';
import QUESTIONNAIRES_DATA from '../../fake-api/QUESTIONNAIRES_DATA.json';

const QuestionnairesList = () => {

   const questionnairesData = QUESTIONNAIRES_DATA;

   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Send</th>
                  <th>Status</th>
                  <th>Remplate</th>
               </tr>
            </thead>
            <tbody>
               {
                  questionnairesData.map((q,i)=> {
                     return (
                        <tr key={q+i}>
                           <td><Link to='/'>{q.title}</Link></td>
                           <td>{q.send === true ? "Sent" : "Not Sent"}</td>
                           <td>{q.status}</td>
                           <td>{q.template}</td>
                        </tr>
                     );
                  })
               }
            </tbody>
         </table>
      </div>
   );
}

export default QuestionnairesList;