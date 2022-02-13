import React from 'react';
import { Table } from 'react-bootstrap';

const MachinesList = ({ data }) => {
  return (
    <Table striped bordered hover>      
      <tbody>
        {data.map(item => <tr key={item.id}>
          <th>{item.id}</th>
          <th>{item.guid}</th>
          <th>{item.customer}</th>
          <th>{item.asset_type}</th>
          <th>{item.serial_number}</th>
          <th>{item.service_contract ? 'yes' : 'no'}</th>
          <th>{item.warranty ? 'yes' : 'no'}</th>
        </tr>)}
      </tbody>
    </Table>
  );
};

export default MachinesList;
