import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

render( <MuiThemeProvider><App/></MuiThemeProvider>, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>,
      document.querySelector("#app")
    );
  });
}
