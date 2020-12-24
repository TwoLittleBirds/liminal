import React, {Component} from 'react';
import  MainLayout from './Components/MainLayout';
import { AppConfigurationClient } from "@azure/app-configuration";
import { FlagsProvider } from 'react-feature-flags';

const FEATURE_FLAG_ENDPOINT = process.env.REACT_APP_FEATURE_FLAG_ENDPOINT || 
  'Endpoint=https://reactfeatureflags.azconfig.io;Id=QRTD-lw-s0:utLC2mgsf/kfq/ndJdi3;Secret=tmRdRfNJwwE+l5Mm+sJCGL4WO8obu11RLLe2F3fzGpc='

let _isMounted = false;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flags: []};
  }

  async componentDidMount(){
    _isMounted = true;
    await this.getFeatureFlags(_isMounted);
  }

  getFeatureFlags = async (isMounted) => {
    try{
      const client = new AppConfigurationClient(FEATURE_FLAG_ENDPOINT);
      const settings = client.listConfigurationSettings({labelFilter: "featureFlag"});
      let flags = [];
      for await (const setting of settings) {
        const jsonObj = JSON.parse(setting.value);
        const obj = {name:jsonObj.id, isActive:jsonObj.enabled};
        flags.push(obj);
      }

      if (isMounted) {
        this.setState({ flags })
      }
    }
    catch(e){}
  };

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



