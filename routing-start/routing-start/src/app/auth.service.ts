
export class AuthService {
  loggedIn = false;

  isAuthenticated() {

    console.log('is authenticated');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
        console.log('logged in');
      }, 800);
    });
  }

  login() {
    this.loggedIn = true;
    console.log('login in auth service');
  }

  logout() {
    this.loggedIn = false;
  }
}
