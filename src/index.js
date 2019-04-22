import './stylesheets/main.css';
import Shrooms from './images/kingoystershrooms.jpeg';

const body = document.getElementById('content');

/**
 * Background
 */
body.style.backgroundImage = `url(${Shrooms})`;

/**
 * Address bar
 */
const addressDom = document.createElement('div');
const addressText = document.createTextNode('835 North Royal Street, Alexandria, VA 22314');

addressDom.className = 'address';
addressDom.appendChild(address);
body.appendChild(addressDom);