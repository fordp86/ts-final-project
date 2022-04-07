import generatePassword from './passwordGenerator';
import generateDate from './dateMaker';
import random from 'random';

class User{
    userid: number;
    username: string;
    password: any;
    created: string | number;

    constructor(username: string){
        let password = generatePassword.generatePassword();
        let createdDate = generateDate.generateDate();
        let userId = random.int((1000), (9999));

        this.userid = userId;
        this.username = username;
        this.password = password;
        this.created = createdDate;
    }

    prettyPrint(){
        console.log(`ID: ${this.userid}`);
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`Created On: ${this.created}`);
    }

}
export default User;