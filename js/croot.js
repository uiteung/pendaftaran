import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

let token = getCookie("login");
function pushbutton(){
    

    let url = "https://bimit-be.ulbi.ac.id/api/v1/insert_bimbingan";
    const data = {
        npm: document.getElementById('npm').value,
        pembimbing1: document.getElementById('pembimbing1').value,
        pembimbing2: document.getElementById('pembimbing2').value,
        tahun_id: document.getElementById('tahun_id').value,
        judul: document.getElementById('judul').value,
        tipe_bimbingan: document.getElementById('tipe_bimbingan').value,
        partner: document.getElementById('partner').value,
        linkgd: document.getElementById('linkgd').value,
        topik: document.getElementById('topik').value,
        abstrak: document.getElementById('abstrak').value
    };

    function AmbilResponse(result) {
        console.log(result);
        alert('Data berhasil disimpan!');
    }

    postWithToken(url, "Login",token, data, AmbilResponse)
    const npmRegex = /^[0-9]+$/;
    if (!npmRegex.test(data.npm)) {
      alert("NPM harus diisi dengan angka!");
      return;
    }
  
    const isDataValid = Object.values(data).every(val => val.trim() !== '');
    if (!isDataValid) {
      alert('Mohon lengkapi semua field terlebih dahulu!');
      return;
    }
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
};  



onClick("button", pushbutton);


