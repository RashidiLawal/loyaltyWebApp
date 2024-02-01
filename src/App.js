import React from 'react';
import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { Col, Row } from 'antd';
import { Outlet} from "react-router-dom";

function App() {
  return (
    <Row>
      <Col span={4.8}>
      <SideBar />
      </Col>
      <Col span={19.2} style={{alignItems:'center', justifyContent:'center'}} id="detail">
        <Outlet />
      </Col>
    </Row>
  );
}

export default App;
