import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'; //faLinkedin
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Input, Icon, Button, Tabs, Upload, message, Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import logo from 'img/logo.png';
import 'css/Home.css';

const Dragger = Upload.Dragger;
const { TextArea } = Input;
const TabPane = Tabs.TabPane;
const Content = Layout;
const Search = Input.Search;

// function beforeUpload(file) {
//   const isJPG = file.type === 'image/jpeg';
//   if (!isJPG) {
//     message.error('You can only upload JPG file!');
//   }
// }

class Home extends Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    fileList.forEach(file => {
      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = e => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
        this.props.updateText(e.target.result);
      };
    });
    this.setState({
      uploading: true,
    });
  };

  clearInput = () => {
    this.inputTextBox.focus();
    this.props.updateText('');
  };

  onChangeInputText = e => {
    this.props.updateText(e.target.value);
  };

  render() {
    // const props = {
    //   name: 'file',
    //   multiple: false,
    //   // accept: '.pdf',
    //   onChange(info) {
    //     const status = info.file.status;
    //     if (status !== 'uploading') {
    //       console.log(info.file, info.fileList);
    //     }
    //     if (status === 'done') {
    //       message.success(`${info.file.name} file uploaded successfully.`);
    //       let file = info.file;
    //       let reader = new FileReader();
    //       console.log(file);
    //       // let data = reader.readAsDataURL(file);
    //       // console.log(data);
    //     } else if (status === 'error') {
    //       message.error(`${info.file.name} file upload failed.`);
    //     }
    //   },
    //   customRequest: ({ file, onSuccess }) => {
    //     setTimeout(() => {
    //       onSuccess('ok');
    //     }, 0);
    //   },
    // };

    const { uploading, fileList } = this.state;
    const props = {
      accept: '.txt',
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };
    const inputText = this.props.inputText;
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <img style={{ bordeRadius: '50%', width: '150px' }} src={logo} alt="tl;dr" />
            {/* <h2>Not all long things are nice</h2> */}
            {/* <div>
              {links.map((link, i) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-auto"
                  key={i}
                  href={link[0]}
                >
                  <FontAwesomeIcon icon={link[1]} size="2x" />
                  &nbsp;
                </a>
              ))}
            </div> */}
          </div>
          &nbsp;
          <div className="col-12">
            <div className="text-center">
              <div style={{ fontSize: '1em', padding: '10px' }}>
                <div>
                  <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="Paste Text" key="1">
                      <div>
                        <TextArea
                          rows={8}
                          placeholder=""
                          value={inputText}
                          onChange={this.onChangeInputText}
                          ref={node => (this.inputTextBox = node)}
                        />
                      </div>
                      &nbsp;
                      <div>
                        <Button onClick={this.clearInput}>Clear</Button>
                        &nbsp;
                        <Link
                          to={{
                            pathname: '/summarize',
                          }}
                        >
                          <Button type="primary" disabled={!this.props.inputText}>
                            Summarize
                          </Button>
                        </Link>
                      </div>
                    </TabPane>
                    {/* <TabPane tab="Paste URL" key="2" disabled>
                      <Row>
                        <Col span={16}>
                          <Input placeholder="Paste URL" />
                        </Col>

                        <Col span={8}>
                          <Link
                            to={{
                              pathname: '/summarize',
                            }}
                          >
                            <Button type="primary" disabled={!this.props.inputText}>
                              Summarize
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </TabPane> */}
                    <TabPane tab="Upload File" key="3">
                      <div className="text-center mt-5">
                        <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                          </p>
                          <p className="ant-upload-text">Click or drag file to upload</p>
                        </Dragger>
                        <Button
                          type="primary"
                          onClick={this.handleUpload}
                          disabled={fileList.length === 0 || fileList.length > 1}
                          loading={uploading}
                          style={{ marginTop: 16 }}
                        >
                          {uploading ? 'Uploading' : 'Start Upload'}
                        </Button>
                      </div>
                      &nbsp;
                      <div>
                        <Link
                          to={{
                            pathname: '/summarize',
                          }}
                        >
                          <Button type="primary" disabled={!this.props.inputText}>
                            Summarize
                          </Button>
                        </Link>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>

              <div>&nbsp;</div>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            Made with <Icon style={{ color: 'red' }} type="heart" /> in Bengaluru.{' '}
            <a href="/about" style={{ textDecoration: 'none', color: 'gray' }}>
              A bit about us
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
