require('./css/public.scss');

import React from 'react'
import App from './app.jsx'

window.onload = function() {
  React.render(<App />, document.getElementById('app'));
}
