import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue,hide } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

export let token = getCookie("login");

export function pushButton(){
    

    let url = "https://bimit-be.ulbi.ac.id/api/v1/insert_bimbingan";
    const data = {
        pembimbing1: getValue('pembimbing1'),
        pembimbing2: getValue('pembimbing2'),
        tahun_id: getValue('tahun_id'),
        judul: getValue('judul'),
        tipe_bimbingan: getValue('tipe_bimbingan'),
        partner: parseInt(getValue('partner')),
        link_gd: getValue('linkgd'),
        topik: getValue('topik'),
        abstrak: getValue('abstrak')
    };

    function AmbilResponse(result) {
        console.log(result);
        alert(result.status);
    }

    const npmRegex = /^[0-9]+$/;
    if (!npmRegex.test(data.partner)) {
      alert("NPM harus diisi dengan angka!");
      return;
    }
  
    const isDataValid = Object.values(data).every(val => val.toString().trim() !== '');
    if (!isDataValid) {
      alert('Mohon lengkapi semua field terlebih dahulu!');
      return;
    }else{
        postWithToken(url, "Login",token, data, AmbilResponse);
        hide('formjancuk');


    }

};  
