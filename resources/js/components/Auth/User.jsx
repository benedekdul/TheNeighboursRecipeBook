class User {

    constructor() {
        this.init()
    }

    init() {
        this.id = localStorage.getItem('id')
        this.name = localStorage.getItem('userName')
        this.email = localStorage.getItem('userEmail')
        this.loggedIn = JSON.parse(localStorage.getItem('userLoggedIn')) === true;
    }

    /**
     *
     * @param data object
     * @param data.id string
     * @param data.name string
     * @param data.email string
     * @param callback function
     */
    authenticated(data) {
        localStorage.setItem('id', data.id)
        localStorage.setItem('userName', data.name)
        localStorage.setItem('userEmail', data.email)
        localStorage.setItem('userLoggedIn', true)
        this.init()
    }

    logout(){
        localStorage.setItem('id', null)
        localStorage.setItem('userName', null)
        localStorage.setItem('userEmail', null)
        localStorage.setItem('userLoggedIn', false)
        this.init();
    }

    /**
     *
     * @return {boolean}
     */
    isLoggedIn() {
        return Boolean(this.loggedIn) === true
    }
}

export default new User()
