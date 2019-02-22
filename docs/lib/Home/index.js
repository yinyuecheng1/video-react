import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router';
import BasicExample from '../examples/import-basic';

const importBasic = require('!!raw-loader!../examples/import-basic');

export default () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
        <Container>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">二进制学院</h1>
              <p className="lead">
                The web video player built from the ground up for an HTML5 world
                using React library.
              </p>
              <p>
                <Button
                  outline
                  color="danger"
                  href="https://github.com/video-react/video-react"
                >
                  View on Github
                </Button>
                <Button color="danger" tag={Link} to="/components/">
                  View Components
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <div>
              <a name="jp1" />
              <h2>课程体系</h2>
            </div>
            <hr />
            <h3>计算机启蒙课程</h3>
            <p>小学以及学期儿童的计算机启蒙教育课程。</p>
            <ul>
              <li>
                <a href="https://studio.kidsos.cn/s/coursea-2018">课程A</a>
              </li>
              <li>课程B</li>
              <li>课程C</li>
              <li>课程D</li>
              <li>课程E</li>
              <li>课程F</li>
            </ul>
            <h3>
              <a href="/customize/enable-disable-components/">Python基础课程</a>
            </h3>
            <p>import css in your app or add video-react styles in your page</p>

            <h3 className="m-t-3">C++基础课程</h3>
            <p>Install dependencies:</p>
            <h3 className="m-t-3">NOIP系列</h3>
            <p>Install dependencies:</p>
            <div>
              <a name="jp2" />
              <h2>师资力量</h2>
            </div>
            <p>名师荟萃，大牛云集</p>
            <div>
              <a name="jp3" />
              <h2>教学理念</h2>
            </div>
            <p>去除“权威”，做参与者、引导者</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
