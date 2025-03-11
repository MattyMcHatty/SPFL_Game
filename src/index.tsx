import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the "client" version of ReactDOM
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';

// Get the root element and assert it to be non-null
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error('Root element not found');
}