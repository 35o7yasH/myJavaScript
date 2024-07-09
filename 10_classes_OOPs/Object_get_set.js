const User = {
    _email: "h@hc.com",
    _password : "adv",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    },
}


const tesh = Object.create(User)
console.log(tesh.email);