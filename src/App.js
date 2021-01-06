import React, {Component} from 'react';
import  MainLayout from './Components/MainLayout';
import { AppConfigurationClient } from "@azure/app-configuration";
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { FlagsProvider } from 'react-feature-flags';
import ErrorBoundary from './Components/ErrorBoundary';
import { appInsights } from './AppInsights/AppInsights';


const FEATURE_FLAG_ENDPOINT = 'Endpoint=https://reactfeatureflags.azconfig.io;Id=QRTD-lw-s0:utLC2mgsf/kfq/ndJdi3;Secret=tmRdRfNJwwE+l5Mm+sJCGL4WO8obu11RLLe2F3fzGpc='

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flags: []};

    this._isMounted = false;
  }

  async componentDidMount(){
    this._isMounted = true;
    await this.getFeatureFlags();
  }

  getFeatureFlags = async () => {
    try{
      appInsights.trackEvent("Get Feature Flags");
      const client = new AppConfigurationClient(FEATURE_FLAG_ENDPOINT);
      const settings = client.listConfigurationSettings({labelFilter: "featureFlag"});
      let flags = [];
      
      for await (const setting of settings) {
        const jsonObj = JSON.parse(setting.value);
        const obj = {name:jsonObj.id, isActive:jsonObj.enabled};
        flags.push(obj);
      }

      if (this._isMounted) {
        this.setState({ flags })
      }
    }
    catch(e){
      appInsights.trackException({ error: new Error(e), severityLevel: SeverityLevel.Error })
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){
    return(
      <ErrorBoundary>
        <FlagsProvider value={this.state.flags}>
          <MainLayout/>
        </FlagsProvider>
      </ErrorBoundary>
    )
  }
}

export default App;

