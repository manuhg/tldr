import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Collapse } from 'antd';
import 'css/Summarize.css';
import logo from 'img/logo.png';
import { jQuery, $ } from 'jquery';

const { Header, Content, Footer } = Layout;
const Panel = Collapse.Panel;
const axios = require('axios');
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Summarize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
    };
  }

  sendData = () => {
    var formData = new FormData();
    const { inputText } = this.props;
    formData.append('document', inputText);
    console.log(inputText);
    axios('https://cloud.tldr.cool/summarize', {
      method: 'POST',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(response => {
        this.setState({ response: response.data.data });
      })
      .catch(err => {
        console.log('errr', err);
      });
  };
  componentDidMount() {
    this.sendData();
  }
  render() {
    return this.state.response ? (
      <div>
        <Layout>
          <Header>
            <img style={{ bordeRadius: '50%', width: '50px' }} src={logo} alt="tl;dr" />
          </Header>
          <Content style={{ padding: '30px', background: '#fff' }}>
            <Collapse
              bordered={false}
              defaultActiveKey={['2']}
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
              <Panel
                header="Original Text"
                key="1"
                style={{
                  background: '#f7f7f7',
                  borderRadius: '4',
                  marginBottom: '24',
                  border: '0',
                  overflow: 'hidden',
                }}
              >
                <div>{this.props.inputText}</div>
              </Panel>
              <br />
              <Panel
                header="Summarized Text"
                key="2"
                style={{
                  background: '#f7f7f7',
                  borderRadius: '4',
                  marginBottom: '24',
                  border: '0',
                  overflow: 'hidden',
                }}
              >
                <div>{this.state.response}</div>
              </Panel>
            </Collapse>
          </Content>
        </Layout>
      </div>
    ) : (
      <div className="App container">
        <div className="row">
          <div className="col-md-8 col-offset-md-2">
            <div className="text-center">WAITING</div>
          </div>
        </div>
      </div>
    );
    // return this.state.response ? (
    //   this.state.response
    // ) : (
    //   <div className="App container">
    //     <div className="row">
    //       <div className="col-md-8 col-offset-md-2">
    //         <div className="text-center">WAITING</div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}
export default Summarize;
