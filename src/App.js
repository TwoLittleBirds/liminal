import React, {Component} from 'react';
import  MainLayout from './Components/MainLayout';
import { AppConfigurationClient } from "@azure/app-configuration";
import { FlagsProvider } from 'react-feature-flags';

const client = new AppConfigurationClient(
  'Endpoint=https://reactfeatureflags.azconfig.io;Id=rbPk-lw-s0:0M5+JsBX32eVrLyi4opr;Secret=/SUxxNQpQfWS560BKlTTM3eQErrIA5nHW6B69M+T/yI='
);

let _isMounted = false;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flags: []};

  }

  async componentDidMount(){
    _isMounted = true;
    const settings = client.listConfigurationSettings({labelFilter: "featureFlag"});
    let flags = [];
  
    for await (const setting of settings) {
      const jsonObj = JSON.parse(setting.value);
      const obj = {name:jsonObj.id, isActive:jsonObj.enabled};
      flags.push(obj);
    }

    if (_isMounted) {
      this.setState({ flags })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){
    return(
      <FlagsProvider value={this.state.flags}>
        <MainLayout/>
      </FlagsProvider>
    )
  }
}



