import React from 'react';
import { getUser, removeUserSession } from '../Utils/common';

function Dashboard(props) {
    const user = getUser();
    
    const handleLogout =() =>{
        removeUserSession();
        props.history.push('/login');
    }
    console.log(user)
    return (
        <div>
            Welcome {user.name}! <br /><br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}


export default Dashboard;