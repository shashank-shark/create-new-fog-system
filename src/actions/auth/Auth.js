import auth0 from 'auth0-js';
import params from '../../utils/auth0/auth0-params';

class Auth {

    auth0 = new auth0.WebAuth({
        domain: params.domain,
        clientID: params.clientId,
        redirectUri: params.callbackUrl,
        scope: params.scope,
        responseType: 'token id_token'
    });

    constructor() {
        this.signin = this.signin.bind(this);
        this.signout = this.signout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    // handle signin
    signin() {
        this.auth0.authorize();
    }

    // handle signout
    signout() {
        // clear the access_token and ID from local_storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    handleAuthentication() {
        return new Promise( ((resolve, reject) => {
            this.auth0.parseHash( (err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    return resolve();
                } else if (err) {
                    console.log(err);
                    return reject(err);
                }
            });
        }))
    }

    setSession(authResult) {
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}

export default Auth;