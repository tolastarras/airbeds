import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

console.log('aaa', process.env)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
