import React, { Component } from 'react';

class Summarize extends Component {
  sendData = () => {
    var formData = new FormData();
    const { inputText } = this.props;
    formData.append('document', inputText);
    console.log(inputText);
    fetch('https://cloud.tldr.cool/', {
      method: 'POST',
      body: formData,
    }).then(function(response) {
      console.log(response);
    });
  };
  componentDidMount() {
    this.sendData();
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-8 col-offset-md-2">
            <div className="text-center" />
          </div>
        </div>
      </div>
    );
  }
}
export default Summarize;
