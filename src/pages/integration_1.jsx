import { useState } from 'react';
import Layout from '../components/Layout';

export default function Integration() {
  const [code, setCode] = useState(1);
  const [customer, setCustomer] = useState({});

  async function getCustomer() {
    const resp = await fetch(`http://localhost:3000/api/customers/${code}`);
    const data = await resp.json();
    setCustomer(data);
    // fetch(`http://localhost:3000/api/customers/${code}`).then(resp => resp.json()).then(data => setCustomer(data));
  }

  return (
    <Layout title="Integração com API #01">
      <div>
        <input type="number" value={code} onChange={e => setCode(e.target.value)} />
        <button onClick={getCustomer}>Obter Cliente</button>
      </div>
      <ul>
        <li>Código: {customer.id}</li>
        <li>Nome: {customer.nome}</li>
        <li>E-mail: {customer.email}</li>
      </ul>
    </Layout>
  )
}