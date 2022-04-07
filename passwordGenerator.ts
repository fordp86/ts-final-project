import randomstring from 'randomstring';

namespace generatePassword{
    export function generatePassword(){
        let random = randomstring.generate({
            length: 15,
            charset: 'alphanumeric'
        });
    
        return random;
    }
}

export default generatePassword;