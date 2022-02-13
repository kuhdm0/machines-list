import React from 'react';
import data from './mock-data/machine_data.json';
import MachinesList from './components/MachinesList';
import MachinesListHeader from './components/MachinesListHeader';
import MachinesListFilter from './components/MachinesListFilter';

function App() {
  return (
    <div>
      <MachinesListFilter />
      <MachinesListHeader />
      <MachinesList data={data} />
    </div>
  );
}

export default App;
