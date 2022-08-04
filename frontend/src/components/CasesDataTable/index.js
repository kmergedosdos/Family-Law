import './index.css';

// Displays all the cases in a table

const CasesDataTable = ({
   cases
}) => {

   cases = [
      {
         num: "22-00001",
         desc: "Divorce",
         deadline: "today",
         clientName: "John Smith",
         clientEmail: "johnsmith@test.com",
         clientPhone: "0123456789"
      },
      {
         num: "22-00002",
         desc: "Family Law",
         deadline: "tomorrow",
         clientName: "Aaron Burr",
         clientEmail: "aaronburr@test.com",
         clientPhone: "0123456789"
      },
      {
         num: "22-00003",
         desc: "Child Custody",
         deadline: "next week",
         clientName: "John Smith",
         clientEmail: "johnsmith@test.com",
         clientPhone: "0123456789"
      }
   ]

   const emailWidth = {width: 150};

   return (
      <div className='table--container'>
         <div className="table--wrapper">
            <div className='table--header table--row'>
               <div className='table--col'>Case no.</div>
               <div className='table--col'>Name</div>
               <div className='table--col'>Description</div>
               <div className='table--col'>Deadline</div>
               <div className='table--col' style={emailWidth}>Email</div>
               <div className='table--col'>Phone</div>
            </div>
            {
               cases.map((caseItem, i) => {
                  return (
                     <div className='table--item table--row'>
                        <div className='table--col'>{caseItem.num}</div>
                        <div className='table--col'>{caseItem.clientName}</div>
                        <div className='table--col'>{caseItem.desc}</div>
                        <div className='table--col'>{caseItem.deadline}</div>
                        <div className='table--col' style={emailWidth}>{caseItem.clientEmail}</div>
                        <div className='table--col'>{caseItem.clientPhone}</div>
                     </div>
                  );
               })
            }
         </div>
      </div>
   );
}

export default CasesDataTable;