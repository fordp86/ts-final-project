import moment from 'moment';

namespace generateDate {
    export function generateDate(): number | string{
        let date: number | string = moment().format('LLLL');
        return date;
     }
}

export default generateDate;