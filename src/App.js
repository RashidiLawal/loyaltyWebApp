import React from 'react';
import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { Col, Row } from 'antd';

function App() {
  return (
    <Row>
      <Col span={4.8}>
      <SideBar />
      </Col>
      <Col span={19.2}>
      </Col>
    </Row>
  );
}

export default App;
