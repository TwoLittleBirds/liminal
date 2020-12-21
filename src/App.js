import React, {Component} from 'react';
import  MainLayout from './Components/MainLayout';
import { AppConfigurationClient } from "@azure/app-configuration";
import { FlagsProvider } from 'react-feature-flags';

const client = new AppConfigurationClient(
  'Endpoint=https://reactfeatureflags.azconfig.io;Id=QRTD-lw-s0:utLC2mgsf/kfq/ndJdi3;Secret=tmRdRfNJwwE+l5Mm+sJCGL4WO8obu11RLLe2F3fzGpc='
);

let _isMounted = false;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flags: []};
console.log("ctor");
  }

  async componentDidMount(){
    console.log("componentDidMount");
    _isMounted = true;
    const settings = client.listConfigurationSettings({labelFilter: "featureFlag"});
    let flags = [];
    console.log("after the call");
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
    console.log("render");
    return(
      <FlagsProvider value={this.state.flags}>
        <MainLayout/>
      </FlagsProvider>
    )
  }
}



