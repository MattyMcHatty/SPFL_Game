import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>My React Redux App</h1>
                {/* Other components will go here */}
            </div>
        </Provider>
    );
};

export default App;