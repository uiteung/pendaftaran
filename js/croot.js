import {onClick} from 'https://jscroot.github.io/element/croot.js';
import {pushbutton} from './controller/senddata.js';

let token = getCookie("login");

if (token === "") {
  document.URL("https://iteung.ulbi.ac.id");
}


onClick("button", pushbutton);


