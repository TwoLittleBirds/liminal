import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';


const status = "Health check passed";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <main>
        <Switch>
          <Route path="/health-check">
            {status}
          </Route>
          <Route path='/' component={App} />
          <Route component={App} />
        </Switch>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
