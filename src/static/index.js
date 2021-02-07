import $ from 'jquery';

var $lis = $('li');
$lis.filter(':even').css('background-color', 'lightblue');
$lis.filter(':odd').css('background-color', 'lightpink');

import './index.css'


let a = num => {
    return numnum*10
}
console.log(a(2))