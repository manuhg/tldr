import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import kalpitha from 'img/kalpitha.jpg';
import mohan from 'img/mohan.jpeg';
import harshal from 'img/harshal.jpeg';

const { Meta } = Card;

class About extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-8 col-offset-md-2">
            <div className="text-center">
              <h1>About</h1>
              Say hi to the amazing people who want to make earth smart again! The long time
              conspiracy of aliens creating un tolerably long documents and traffic jams to deter
              normal sapiens from acquring more knowlegde on daily basis has been exposed! Hail the
              people below who have accepted the challenge to make the world a better place by
              inducing common knowlegde and general sense in form of a few sentences instead of long
              documents called the news paper articles. Wait till we roll out beta version before
              signing the next EULA!.
            </div>
            &nbsp; &nbsp;
            <div style={{ padding: '20px' }}>
              <Row gutter={16}>
                <Col span={6}>
                  <div style={{ paddingLeft: '60px' }}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={kalpitha} />}
                    >
                      <Meta title="Kalpitha V Bekal" description="" />
                    </Card>
                  </div>
                </Col>
                <Col span={6}>
                  <div style={{ paddingLeft: '40px' }}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src="https://manuhegde.in/static/media/2dp.a9371b0f.jpg"
                        />
                      }
                    >
                      <Meta title="Manu Hegde" description="" />
                    </Card>
                  </div>
                </Col>
                <Col span={6}>
                  <div style={{ paddingLeft: '20px' }}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={harshal} />}
                    >
                      <Meta title="Harshal Bhatia" description="" />
                    </Card>
                  </div>
                </Col>
                <Col span={6}>
                  <Card hoverable style={{ width: 228 }} cover={<img alt="example" src={mohan} />}>
                    <Meta title="Mohan Krishna S" description="" />
                  </Card>
                </Col>
              </Row>
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
