import React, { useState } from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';
import styles from './styles.module.scss';
import { getSortedItems } from '../../utils';

const MachinesListHeader = ({ data, setItems }) => {
  const [inversed, setInversed] = useState(true);
  const [lastSortedField, setLastSortedField] = useState('id');

  const onSort = (e) => {
    const currentSortedField = e.currentTarget.id;    
    setItems(getSortedItems(data, currentSortedField, lastSortedField, inversed, setInversed));
    setInversed(lastSortedField === currentSortedField ? !inversed : true);
    setLastSortedField(currentSortedField);
  };

  return (
    <thead>
      <tr className={styles.header}>
        <th>ID <TiArrowUnsorted id="id" onClick={onSort} /></th>
        <th>GUID <TiArrowUnsorted id="guid" onClick={onSort}/></th>
        <th>Customer <TiArrowUnsorted id="customer" onClick={onSort}/></th>
        <th>Asset type <TiArrowUnsorted id="asset_type" onClick={onSort}/></th>
        <th>Serial number <TiArrowUnsorted id="serial_number" onClick={onSort}/></th>
        <th>Service contract <TiArrowUnsorted id="service_contract" onClick={onSort}/></th>
        <th>Warranty <TiArrowUnsorted id="warranty" onClick={onSort} /></th>
      </tr>
    </thead>
  );
};

export default MachinesListHeader;
