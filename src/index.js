import _ from 'lodash';
import myName from './myName';
import './style.css';
function component(){
    const element = document.createElement('div');

    //lodash is included via a script and requires this line to work
    //element.innerHtml = _.join(['Hello', 'webpack'], ' ');

    //lodash is now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName("Danyal");
    element.classList.add("hello");
    return element;
}

document.body.appendChild(component());