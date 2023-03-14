import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

let token = getCookie("login");
button.addEventListener('submit', (e) => {
    e.preventDefault();

    let url = "https://bimit-be.ulbi.ac.id/api/v1/insert_bimbingan";
    const data = {
        npm: document.getElementById('npm').value,
        pembimbing1: document.getElementById('pembimbing1').value,
        pembimbing2: document.getElementById('pembimbing2').value,
        tahun_id: document.getElementById('tahun_id').value,
        judul: document.getElementById('judul').value,
        tipe_bimbingan: document.getElementById('tipe_bimbingan').value,
        partner: document.getElementById('partner').value
    };

    function AmbilResponse(result) {
        console.log(result);
        alert('Data berhasil disimpan!');
    }

    postWithToken(url, "Login",token, data, AmbilResponse)

});  

