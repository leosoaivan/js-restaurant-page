import './stylesheets/main.css';
import ShrimpImage from './images/shrimp.jpeg';

let backgroundImage = new Image('100%', '100%');
backgroundImage.src = ShrimpImage;

document.body.appendChild(backgroundImage);
