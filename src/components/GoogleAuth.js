import React from 'react';


class GoogleAuth extends React.Component {
    state = { isSignedIn : null};
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '784154622644-9l481kemm0qbrskiaba9k7nmqk68chqq.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn : this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChanged);
            })
        });
    }

    onAuthChanged = () => {
        this.setState({ isSignedIn : this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signin();
    };

    onSignOut= () => {
        this.auth.signOut();
    };


    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.onSignOut}>
                    <i className='google icon'/>
                    Sign Out!
                </button>
            );
        }else {
            return (
                <button className='ui red google button' onClick={this.onSignIn}>
                    <i className='google icon'/>
                    Google Sign In!
                </button>
            );
        }
    };

    render() {
        return <div>{this.renderAuthButton()}</div>;
    };
}

export default GoogleAuth;
