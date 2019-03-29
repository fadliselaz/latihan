import React, { Component } from 'react';
import store from "./store"
import { Provider } from "react-redux"
import List from "./list.js"


class ReduxTuts extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                cek
                <List />
            </div>
            </Provider>
        );
    }
}

export default ReduxTuts;
