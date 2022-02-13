import React from 'react';
import { BOOL_MAP } from '../../constants';

const MachinesList = ({ items }) => {
  return (
    <tbody>
      {items.map(item => <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.guid}</td>
        <td>{item.customer}</td>
        <td>{item.asset_type}</td>
        <td>{item.serial_number}</td>
        <td>{BOOL_MAP[item.service_contract]}</td>
        <td>{BOOL_MAP[item.warranty]}</td>
      </tr>)}
    </tbody>
  );
};

export default MachinesList;
