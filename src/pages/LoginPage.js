import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor="">Podaj Login
                <input type="text"/>
            </label>
                <br/>
            <label htmlFor="">Podaj Hasło
                <input type="password"/>
            </label>
            <button style={{
                display:'block',
                width: 100,
                height:30,
                backgroundColor: 'white',
                border: '2px solid black',
                cursor: 'pointer',
            }
                }>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;