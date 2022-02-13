import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import data from './mock-data/machine_data.json';
import MachinesList from './components/MachinesList';
import MachinesListHeader from './components/MachinesListHeader';
import MachinesListFilter from './components/MachinesListFilter';
import styles from './styles.module.scss';

function App() {
  const [items, setItems] = useState(data);

  return (
    <div className={styles.wrapper}>
      <MachinesListFilter />
      <Table striped bordered hover>
        <MachinesListHeader data={data} setItems={setItems} />
        <MachinesList items={items} />
      </Table>
    </div>
  );
}

export default App;
