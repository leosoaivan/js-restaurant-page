import './stylesheets/main.css';
import ShrimpImage from './images/shrimp.jpeg';

const body = document.getElementById('content');

let backgroundImage = new Image();
backgroundImage.src = ShrimpImage;

body.appendChild(backgroundImage);
