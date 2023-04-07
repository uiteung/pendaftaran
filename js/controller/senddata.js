import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue,hide,show } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

export let token = getCookie("login");

export function cekTipeBimbingan(){
    let tb=getValue("tipe_bimbingan");
    if (tb==="ta" || tb === "i1" || tb === "i2"){
        hide("partner");
    }else{
        show("partner");
    }
  
}


export function pushButton(){
    

    let url = "https://bimit-be.ulbi.ac.id/api/v1/insert_bimbingan";
    const data = {
        pembimbing1: getValue('pembimbing1'),
        pembimbing2: getValue('pembimbing2'),
        tahun_id: getValue('tahun_id'),
        judul: getValue('judul'),
        tipe_bimbingan: getValue('tipe_bimbingan'),
        partner: getValue('partner'),
        link_gd: getValue('link_gd'),
        topik: getValue('topik'),
        abstrak: getValue('abstrak')
    };

    function AmbilResponse(result) {
        console.log(result);
        alert(result.status);
    }

    // const npmRegex = /^[0-9]+$/;
    // if (!npmRegex.test(data.partner)) {
    //   alert("NPM harus diisi dengan angka!");
    //   return;
    // }
    const isDataValid = pembimbing1 && pembimbing2 && tahun_id && judul && tipe_bimbingan && link_gd && topik && abstrak;

    // const isDataValid = Object.values(data).every(val => val.toString().trim() !== '');
    if (!isDataValid) {
      alert('Mohon lengkapi semua field terlebih dahulu!');
      return;
    }else{
        const data = {
        pembimbing1,
        pembimbing2,
        tahun_id,
        judul,
        tipe_bimbingan,
        partner,
        link_gd,
        topik,
        abstrak
    };
        postWithToken(url, "Login",token, data, AmbilResponse);
        hide('formjancuk');


    }

};  
