import React, { Component } from 'react';
import Header from './components/templates/header';
import Main from './components/main';
//import Footer from './components/templates/footer';
import AdminStore from '../../admin-redux/store';
import { Provider } from 'react-redux';

class Admin extends Component {

    render() {
        return (
            <div>
                <Header />
                <Provider store={AdminStore}>
                    <Main />
                </Provider>
                {/*<Footer />*/}
            </div>
        )
    };
}

export default Admin;