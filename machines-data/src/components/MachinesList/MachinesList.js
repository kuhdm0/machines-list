import React from 'react';

const MachinesList = ({ data }) => {
  return (
    <tbody>
      {data.map(item => <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.guid}</td>
        <td>{item.customer}</td>
        <td>{item.asset_type}</td>
        <td>{item.serial_number}</td>
        <td>{item.service_contract ? 'yes' : 'no'}</td>
        <td>{item.warranty ? 'yes' : 'no'}</td>
      </tr>)}
    </tbody>
  );
};

export default MachinesList;
