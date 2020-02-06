import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '784154622644-9l481kemm0qbrskiaba9k7nmqk68chqq.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                //this.setState({ isSignedIn : this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChanged);
            })
        });
    }

    onAuthChanged = isSignedIn => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className='google icon'/>
                    Sign Out!
                </button>
            );
        }else {
            return (
                <button className='ui red google button' onClick={this.onSignInClick}>
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

//you set the variable of the current component props
const mapStateToProps = (state) => {
    return { isSignedIn : state.auth.isSignedIn };
}

export default connect(
    mapStateToProps,
    { signIn, signOut })(GoogleAuth);
