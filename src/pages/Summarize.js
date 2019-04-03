import React, { Component } from 'react';

class Summarize extends Component {
  constructor() {
    super();
    // sessionStorage.setItem("confirmation", "5ad7613e73e1b219ac417a49");
    this.state = {
      data: window.sessionStorage && window.sessionStorage.getItem('data'),
    };
  }

  sendData = () => {
    var formData = new FormData();
    const { inputText } = this.state.data;
    formData.append('document', inputText);
    console.log(inputText);
    fetch('http://cloud.tldr.cool/summarize ', {
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
