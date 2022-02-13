import React, { useState } from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';
import styles from './styles.module.scss';
import { getSortedItems } from '../../utils';
import { COLUMNS } from '../../constants';

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
        {COLUMNS.map(column => <th key={column.id}>{column.label} <TiArrowUnsorted id={column.id} onClick={onSort} /></th>)}
      </tr>
    </thead>
  );
};

export default MachinesListHeader;
