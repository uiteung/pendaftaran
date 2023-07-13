import {onClick,onChange} from 'https://jscroot.github.io/element/croot.js';
import {pushButton,token,cekTipeBimbingan} from './controller/senddata.js';


if (token === "") {
  window.location.replace("https://euis.ulbi.ac.id");
}


onClick("button", pushButton);

onChange("tipe_bimbingan",cekTipeBimbingan );


