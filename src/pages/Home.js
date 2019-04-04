import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'; //faLinkedin
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from 'img/logo.png';
const { TextArea } = Input;

class Home extends Component {
  clearInput = () => {
    this.inputTextBox.focus();
    this.updateText('');
  };

  onChangeInputText = e => {
    this.props.updateText(e.target.value);
  };

  render() {
    const inputText = this.props.inputText;
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <img style={{ borderRadius: '50%', width: '150px' }} src={logo} alt="tl;dr" />
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
                  {/* <Search
                    placeholder="input search text"
                    enterButton="Summarize"
                    size="large"
                    onSearch={value => console.log(value)}
                  /> */}
                  {/* <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag and drop file to upload</p>
                  </Dragger>
                  <br /> */}
                  <TextArea
                    rows={8}
                    placeholder=""
                    value={inputText}
                    onChange={this.onChangeInputText}
                    ref={node => (this.inputTextBox = node)}
                  />
                </div>
                <br />
                <div>
                  <Button onClick={this.clearInput}>Clear</Button>
                  &nbsp;
                  <Link
                    to={{
                      pathname: '/summarize',
                    }}
                  >
                    <Button type="primary">Summarize</Button>
                  </Link>
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
