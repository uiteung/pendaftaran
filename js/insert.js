const button = document.querySelector('form');

button.addEventListener('submit', (e) => {
  e.preventDefault();

 

  const data = {
    npm: document.getElementById('npm').value,
    pembimbing1: document.getElementById('pembimbing1').value,
    pembimbing2: document.getElementById('pembimbing2').value,
    tahun_id: document.getElementById('tahun_id').value,
    judul: document.getElementById('judul').value,
    tipe_bimbingan: document.getElementById('tipe_bimbingan').value,
    partner: document.getElementById('partner').value
  };

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

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch("https://bimit-be.ulbi.ac.id/api/v1/insert_bimbingan", requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Terjadi kesalahan saat mengirim data ke server!');
    }
    return response.json();
  })
  .then(result => {
    console.log(result);
    alert('Data berhasil disimpan!');
  })
  .catch(error => {
    console.log('error', error);
    alert('Terjadi kesalahan: ' + error.message);
  });
});