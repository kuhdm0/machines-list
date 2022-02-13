import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import data from './mock-data/machine_data.json';
import MachinesList from './components/MachinesList';
import MachinesListHeader from './components/MachinesListHeader';
import MachinesListFilter from './components/MachinesListFilter';

function App() {
  return (
    <div>
      <MachinesListFilter />
      <Table striped bordered hover>
        <MachinesListHeader />
        <MachinesList data={data} />
      </Table>
    </div>
  );
}

export default App;
