import {resolve} from 'q';

export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(() => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
