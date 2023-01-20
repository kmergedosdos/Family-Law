import { useEffect, useState } from 'react';
import './index.css';

const styles = {
  th: {
    textTransform: "capitalize"
  }
}


const DataTable = ({ data, setNewData, totals }) => {

  const [headers, setHeaders] = useState([]);
  const [items, setItems] = useState([]);
  const [newRowInputData, setNewRowInputData] = useState(null);
  const [summation, setSummation] = useState({});

  useEffect(() => {
    if(Array.isArray(data) && data.length) {
      // set data item keys (except 'id') as headers 
      setHeaders(Object.keys(data[0]).filter(k => k !== "id"));
    }
  }, [data]);

  useEffect(() => {
    if(Array.isArray(data) && data.length) {
      // reverse order of data to display
      const reverseData = [...data].reverse();
      // set items to display based on the headers
      setItems(reverseData.map(item => {
        const temp_item = {};
        headers.forEach(header => {
          temp_item[header] = item[header];
        })
        return temp_item;
      }));

      // set summation of data included in totals if given
      if(totals) {
        setSummation(totals.reduce((res, total) => {
          return {
            ...res,
            [total]: reverseData.reduce((sum, item) => sum + item[total], 0)
          }
        }, {}));
      }
    }
  }, [data, headers, totals]);

  function addNewRow() {
    setNewRowInputData(headers.reduce((newRowInputData, header) => {
      newRowInputData[header] = null;
      return newRowInputData;
    }, {}))
  }

  function saveNewRow() {
    const newRowData = {
      id: data.slice(-1)[0].id + 1,
      ...newRowInputData
    }
    // console.log(newRowData);
    setNewData(prevData => ([...prevData, newRowData]));
    setNewRowInputData(null);
  }

  function handleRowInputChange(e, key) {
    const value = e.target.value;
    setNewRowInputData(prevInputData => ({...prevInputData, [key]: value}));
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
        {
          newRowInputData ?
          <>
            <tr className='tablerow'>
              {
                Object.keys(newRowInputData).map((key, i) => {
                  if(i === 0) {
                    return (
                      <td key={i} className="tablerow__data">
                        <input
                          autoFocus
                          type="text"
                          className='tablerow__input'
                          onChange={(e) => {
                            handleRowInputChange(e, key);
                          }}
                        />
                      </td>
                    )
                  }
                  return (
                    <td key={i} className="tablerow__data">
                      <input
                        type="text"
                        className='tablerow__input'
                        onChange={(e) => {
                          handleRowInputChange(e, key);
                        }}
                      />
                    </td>
                  )
                })
              }
            </tr>
            <tr>
              <td>
                <button onClick={saveNewRow}>
                  Save
                </button>
              </td>
            </tr>
          </>
          :
          <tr>
            <td>
              <button onClick={addNewRow}>
                +New
              </button>
            </td>
          </tr>
        }
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
        {
          Array.isArray(totals) && totals.length > 0 && 
          <tr className='tablerow-totals'>
            {
              headers.map((header, i) => (
                <td key={i}>
                  {totals.includes(header) && summation[header]}
                </td>
              ))
            }
          </tr>
        }
      </tbody>
    </table>
  );
}

export default DataTable;