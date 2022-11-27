import { useEffect, useState } from 'react';
import './index.css';

const styles = {
  th: {
    textTransform: "capitalize"
  }
}


const DataTable = ({ data, setNewData }) => {

  const [headers, setHeaders] = useState([]);
  const [items, setItems] = useState([]);
  const [newRowInputData, setNewRowInputData] = useState(null);

  useEffect(() => {
    if(Array.isArray(data) && data.length) {
      // set data item keys (except 'id') as headers 
      setHeaders(Object.keys(data[0]).filter(k => k !== "id"));
    }
  }, [data]);

  useEffect(() => {
    if(Array.isArray(data) && data.length) {
      // set items to display based on the headers
      setItems(data.map(item => {
        const temp_item = {};
        headers.forEach(header => {
          temp_item[header] = item[header];
        })
        return temp_item;
      }));
    }
  }, [data, headers]);

  function addNewRow() {
    const newRowData = {
      id: data.slice(-1)[0].id + 1,
      ...headers.reduce((newRowInputData, header) => {
        newRowInputData[header] = null;
        return newRowInputData;
      }, {})
    }
    console.log(newRowData);

    // setNewRowInputData()
  }

  return (
    <table className='datatable'>
      <thead>
        <tr>
          {
            headers.map((header, i) => (
              <th key={`${header}${i}`} style={styles.th}>{header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button onClick={addNewRow}>
              +New
            </button>
          </td>
        </tr>
        {
          items.map((item, i) => (
            <tr key={i}>
              {
                Object.values(item).map((value, i) => (
                  <td key={i}>{value}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default DataTable;