import './stylesheets/main.css';
import Shrooms from './images/kingoystershrooms.jpeg';

const body = document.getElementById('content');

/**
 * Background
 */
body.style.backgroundImage = `url(${Shrooms})`;

/**
 * Header
 */
const addressDom = document.createElement('header');
addressDom.className = 'address';

const addressText = document.createElement('div');
addressText.innerText = '835 North Capital Street, Alexandria, VA 12345';
addressText.className = 'address-text'

const phoneNumber = document.createElement('div');
phoneNumber.innerText = '(123) 456-7890';
phoneNumber.className = 'address-phonenumber';

addressDom.appendChild(addressText);
addressDom.appendChild(phoneNumber);
body.appendChild(addressDom);
