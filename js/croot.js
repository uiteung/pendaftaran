import {onClick} from 'https://jscroot.github.io/element/croot.js';
import {pushButton,token} from './controller/senddata.js';


if (token === "") {
  window.location.replace("https://iteung.ulbi.ac.id");
}


onClick("button", pushButton);


