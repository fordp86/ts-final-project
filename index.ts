import User from './user';

let user1 = 'Jerry Senfield';
let user2 = 'Jerry Lewis';
let user3 = 'Jerry Rice';
let user4 = 'Jerry Garcia';

const users: string[] = [ user1, user2, user3, user4 ];

for(let user of users){
    let newUser = new User(user);
   console.log(newUser.prettyPrint());
}