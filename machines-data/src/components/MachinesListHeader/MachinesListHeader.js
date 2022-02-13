import React from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';
import styles from './styles.module.scss';

const MachinesListHeader = () => {
  return (
    <thead>
      <tr className={styles.header}>
        <th>ID <TiArrowUnsorted /></th>
        <th>GUID <TiArrowUnsorted /></th>
        <th>Customer <TiArrowUnsorted /></th>
        <th>Asset type <TiArrowUnsorted /></th>
        <th>Serial number <TiArrowUnsorted /></th>
        <th>Service contract <TiArrowUnsorted /></th>
        <th>Warranty <TiArrowUnsorted /></th>
      </tr>
    </thead>
  );
};

export default MachinesListHeader;
