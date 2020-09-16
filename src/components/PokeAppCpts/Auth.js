class Auth {
  constructor() {
    this.authenticated = false;
  }

  enter(callback) {
    this.authenticated = true;
    callback();
  }

  back(callback) {
    this.authenticated = false;
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();