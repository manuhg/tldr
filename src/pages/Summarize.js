import React, { Component } from 'react';
const axios = require('axios');

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
      this.state.response
    ) : (
      <div className="App container">
        <div className="row">
          <div className="col-md-8 col-offset-md-2">
            <div className="text-center">WATING</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Summarize;
