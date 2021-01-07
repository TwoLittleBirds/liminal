import {ApplicationInsights} from '@microsoft/applicationinsights-web'
import {
  ReactPlugin,
  withAITracking,
} from '@microsoft/applicationinsights-react-js'
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({ basename: '' });
const reactPlugin = new ReactPlugin()
const ai = new ApplicationInsights({
  config: {
    instrumentationKey: "a2b19403-81a5-4894-ab9a-bc83fe042d1d",
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: {history: browserHistory},
    },
  },
})
ai.loadAppInsights()
ai.trackPageView()

ReactPlugin.prototype.trackEvent = function(event, customProperties) {
  this._analyticsPlugin.trackEvent(event, customProperties)
}

export const trackException = (error) => {
  ai.trackException(error);
}

export const trackEvent = (eventName, data) => {
  ai.trackEvent({name: eventName}, data)
}

export default Component => withAITracking(reactPlugin, Component)
export const appInsights = ai.appInsights
export {reactPlugin}