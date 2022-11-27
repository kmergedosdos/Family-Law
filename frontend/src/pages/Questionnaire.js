import { useState } from 'react';
import DataTable from '../components/DataTable';
import QUESTIONNAIRES from '../fake-api/QUESTIONNAIRES_DATA.json';

const Questionnaire = () => {
  const [questionnairesData, setQuestionnairesData] = useState(QUESTIONNAIRES);
  
  return (
    <div>
      <DataTable data={ questionnairesData }/>
    </div>
  );
}

export default Questionnaire;