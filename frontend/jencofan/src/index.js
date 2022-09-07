import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store'
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import {useLayoutEffect} from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"))
const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
root.render(<Provider store={store}>
<Router>
<Wrapper>
    <App />
    </Wrapper>
    </Router>
    </Provider>);


