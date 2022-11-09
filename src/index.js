import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import Icon from './icon.jpg'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'click me and check the console'
    btn.onclick = printMe;
    element.appendChild(btn);
    
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon,

    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());