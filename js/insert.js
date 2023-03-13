const button = document.querySelector('button');

button.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    // nama: document.getElementById('nama').value,
    npm: document.getElementById('npm').value,
    // url: document.getElementById('url').value,
    // topik: document.getElementById('topik').value,
    // abstrak: document.getElementById('abstrak').value,
    tahun_id: document.getElementById('tahun_id').value,
    judul: document.getElementById('judul').value,
    prodi_id: document.getElementById('prodi_id').value,
    partner: document.getElementById('partner').value,
    tipe_bimbingan: document.getElementById('tipe_bimbingan').value,
    pembimbing1: document.getElementById('pembimbing1').value,
    pembimbing2: document.getElementById('pembimbing2').value
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  console.log(requestOptions);

  fetch("http://bimit-be.ulbi.ac.id/api/v1/create_bimbingan", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result), alert("data inserted"))
    .catch(error => console.log('error', error));
})