import React from 'react';

// import Logo from '../assets/images/cupid.png'

const AuthWrapper = ({title, children}) => {

    // const logo = "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyZWVuJTIwaWNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

return(
    <div className=" container max-w-lg mx-auto">
        <h2>{title}</h2>
        {children}
       
    </div>
    );
}

export default AuthWrapper;