// Higher Order Component (HOC) - A component that renders another comp

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedCompponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is privete info. Plese don't share!</p> }
            <WrappedCompponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedCompponent) => {
    return (props) => (
        <div>
            { props.isAuth ? <WrappedCompponent { ...props } /> : <p>Plese Log In</p>}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app')); 
ReactDOM.render(<AuthInfo isAuth={false} info="There are the details!!!!"/>, document.getElementById('app'));