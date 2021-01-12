import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage.component';
import * as actionTypes from './store/actionTypes';

const App = (props) => {
    // when app starts check if a user is already connected (local storage)
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const { username, token } = JSON.parse(user);
            props.updateUser(username, token);
        }
    });

    return (
        <Layout>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Redirect to='/' />
            </Switch>
        </Layout>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (username, token) =>
            dispatch({ type: actionTypes.LOGIN, username, token }),
    };
};

export default connect(null, mapDispatchToProps)(App);
