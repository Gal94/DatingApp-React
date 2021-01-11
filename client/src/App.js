import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage.component';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Redirect to='/' />
            </Switch>
        </Layout>
    );
};

export default App;
