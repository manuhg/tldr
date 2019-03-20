import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'; //faLinkedin
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'antd';
import logo from 'img/logo.png';
class Home extends Component {
  render() {
    const Search = Input.Search;
    // const links = ['https://github.com/manuhg/tldr', faGithub];
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <img style={{ borderRadius: '50%', width: '150px' }} src={logo} alt="tl;dr" />
            <h2>Not all long things are nice</h2>
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
          <div className="col-12">
            <div className="text-center">
              <div style={{ fontSize: '1em', padding: '2px' }}>
                <div>
                  <Search
                    placeholder="input search text"
                    enterButton="Summarize"
                    size="large"
                    onSearch={value => console.log(value)}
                  />
                </div>
              </div>
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
