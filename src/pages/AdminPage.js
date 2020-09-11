import React,{ Component } from 'react';
import {Route,Redirect} from 'react-router-dom'

const permission = false;

class AdminPage extends Component {
    render() { 
        return ( 
            <Route render={() => (
                permission ? (<h3>Panel Admina</h3>) : 
                (<Redirect to="/login"/>)
            )}/>
         );
    }
}
 
export default AdminPage;