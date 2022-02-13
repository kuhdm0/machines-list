import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import data from './mock-data/machine_data.json';
import MachinesList from './components/MachinesList';
import MachinesListHeader from './components/MachinesListHeader';
import MachinesListFilter from './components/MachinesListFilter';
import styles from './styles.module.scss';

function App() {
  const [filteredItems, setFilteredItems] = useState(data);

  return (
    <div className={styles.wrapper}>
      <MachinesListFilter data={data} setFilteredItems={setFilteredItems} />
      <Table striped bordered hover>
        <MachinesListHeader data={filteredItems} setItems={setFilteredItems} />
        <MachinesList items={filteredItems} />
      </Table>
    </div>
  );
}

export default App;
