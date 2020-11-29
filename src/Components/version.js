import React from 'react';

var pjson = require('../../package.json');

class Version extends React.Component {
    render() {
      return <div>{pjson.version}</div>;
    }
  }

  export default  Version;
