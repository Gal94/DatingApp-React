import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout/Layout';
import * as actionTypes from './store/actionTypes';
import HomePage from './pages/HomePage/HomePage.component';
import MembersPage from './pages/MembersPage/MembersPage.component';
import MemberDetailPage from './pages/MemberDetailPage/MemberDetailPage.component';
import ListsPage from './pages/ListsPage/ListsPage.component';
import MessagesPage from './pages/MessagesPage/MessagesPage.component';

const App = (props) => {
    // when app starts check if a user is already connected (local storage)
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const { username, token } = JSON.parse(user);
            props.updateUser(username, token);
        }
    });

    // Routes protector
    const history = useHistory();
    const checkLoginStatus = () => {
        if (!props.token) {
            history.push('/');
        }
    };

    return (
        <Layout>
            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/members' exact>
                    <MembersPage guarded={checkLoginStatus} />
                </Route>
                <Route path='/members/:id' exact>
                    <MemberDetailPage guarded={checkLoginStatus} />
                </Route>
                <Route path='/lists' exact>
                    <ListsPage guarded={checkLoginStatus} />
                </Route>
                <Route path='/messages' exact>
                    <MessagesPage guarded={checkLoginStatus} />
                </Route>
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

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
