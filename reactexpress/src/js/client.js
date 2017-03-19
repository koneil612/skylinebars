import React from "react";
import ReactDOM from "react-dom";
import SkyLineMain from "./components/SkyLineMain";
import { Provider } from "react-redux";
import store from "./store";
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import About from "./pages/About";
import Home from "./pages/Home";

const app = document.getElementById('app');

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
        <Route path="/" component={SkyLineMain}>
            {/* add it here, as a child of `/` */}
            <IndexRoute component={Home}/>
            {/* make them children of `App` */}
            <Route path="/about" component={About}/>
        </Route>
        </Router>
    </Provider>
), app);
