import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p> This is private info please not share</p>
            <WrappedComponent {...props} />
        </div>
    );
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info ="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info ="There are the details"/>, document.getElementById('app'));