import moment from 'moment';

export default function greet() {
    let day = moment().format('dddd');
    console.log(`Have a great ${day}!`);
}
