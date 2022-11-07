import { useState } from 'react';
import DataTable from '../components/DataTable';
import INVOICES from '../fake-api/INVOICES.json';
import PAYMENTS from '../fake-api/PAYMENTS.json';

const style = {
  padding: "1em",
  display: "flex",
  gap: "2em"
}

const Invoices = () => {
  const [invoices, setInvoices] = useState(INVOICES);
  const [payments, setPayments] = useState(PAYMENTS);

  return (
    <div style={style}>
      <section>
        <h3>Invoices</h3>
        <DataTable data={invoices} />
      </section>
      <section>
        <h3>Payments</h3>
        <DataTable data={payments} />
      </section>
    </div>
  )
}

export default Invoices;