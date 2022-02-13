import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { COLUMNS, BOOL_MAP } from '../../constants';
import styles from './styles.module.scss';

const MachinesListFilter = ({ data, filteredItems, setFilteredItems }) => {
  const [selectedField, setSelectedField] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSelect = (e) => {
    setSelectedField(e.currentTarget.value);
  };

  const handleType = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (!selectedField) {
      setFilteredItems(data);
    } else {
      setFilteredItems(data.filter(item => {
        const field = item[selectedField];
        const checkStr = typeof field === 'boolean' ? BOOL_MAP[field] : field.toString();
        return checkStr.includes(searchValue);
      }));
    }
  };

  return (
    <Form className={styles.filter}>
      <Row className="d-flex align-items-center">
        <Col md={2} className={styles.resultsNumber}><b>{filteredItems.length}</b> results shown</Col>
        <Col md={2}></Col>
        <Col md={1}><Form.Label className="mb-0">Field</Form.Label></Col>
        <Col md={2}>
          <Form.Select aria-label="Default select example" onChange={handleSelect}>
            <option value="">Select field</option>
            {COLUMNS.map(column => <option key={`option-${column.id}`} value={column.id}>{column.label}</option>)}          
          </Form.Select>
        </Col>        
        <Col md={1}><Form.Label className="mb-0">Value</Form.Label></Col>
        <Col md={2}><Form.Control type="text" placeholder="Type text" onChange={handleType} /></Col>
        <Col md={2}>
          <Button variant="primary" type="submit" onClick={onSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MachinesListFilter;
