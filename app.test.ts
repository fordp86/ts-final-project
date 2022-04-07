import generateDate from './dateMaker';
import generatePassword from './passwordGenerator';
import User from './user';

 //test prettyPrint()
it('Test user pretty print method', () => {
    let user = new User('Jerry B');
    expect(user).toBeInstanceOf(User);
});

// test password generator
it('If given produce random password', () => {
    let result = generatePassword.generatePassword();
    expect(result).toBeDefined();
});

// test date generator
it('If given produce random date', () => {
    let result = generateDate.generateDate();
    expect(typeof result).toBe("string");
});

// test user class user ID
it('If given user id produces any number', () => {
    let result = new User("Jerry B") ;
    expect(typeof result.userid).toBe("number");
});

// test user class username
it('If given username produce user values', () => {
    let result = new User("Jerry B") ;
    expect(result.username).toBe("Jerry B");
});
