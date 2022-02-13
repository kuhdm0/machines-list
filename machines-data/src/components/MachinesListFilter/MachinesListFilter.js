import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { COLUMNS } from '../../constants';
import styles from './styles.module.scss';

const MachinesListFilter = () => {
  return (
    <Form className={styles.filter}>
      <Row className="d-flex align-items-center">
        <Col md={4}></Col>
        <Col md={1}><Form.Label className="mb-0">Field</Form.Label></Col>
        <Col md={2}>
          <Form.Select aria-label="Default select example">
            <option>Select field</option>
            {COLUMNS.map(column => <option key={`option-${column.id}`} value={column.id}>{column.label}</option>)}          
          </Form.Select>
        </Col>        
        <Col md={1}><Form.Label className="mb-0">Value</Form.Label></Col>
        <Col md={2}><Form.Control type="text" placeholder="Type text" /></Col>
        <Col md={2}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MachinesListFilter;
