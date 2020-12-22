import React, {Component} from 'react';
import  MainLayout from './Components/MainLayout';
import { AppConfigurationClient } from "@azure/app-configuration";
import { FlagsProvider } from 'react-feature-flags';

const FEATURE_FLAG_ENDPOINT = process.env.REACT_APP_FEATURE_FLAG_ENDPOINT;
const client = new AppConfigurationClient(FEATURE_FLAG_ENDPOINT);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flags: []};
  }

  async componentDidMount(){
    this.getFeatureFlags();
  }

  getFeatureFlags = async () => {
    try{

      const settings = client.listConfigurationSettings({labelFilter: "featureFlag"});
      let flags = [];

      for await (const setting of settings) {
        const jsonObj = JSON.parse(setting.value);
        const obj = {name:jsonObj.id, isActive:jsonObj.enabled};
        flags.push(obj);
      }

      this.setState({ flags })
    }
    catch(e){

    }
  };

  render(){
    return(
      <FlagsProvider value={this.state.flags}>
        <MainLayout/>
      </FlagsProvider>
    )
  }
}



