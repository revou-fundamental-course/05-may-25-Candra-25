document.addEventListener("DOMContentLoaded", function () {
    const name = window.prompt("masukkan nama anda:", "Candra");
    if (name) {
        const span = document.querySelector(".highlight")
        if (span) span.textContent = name;
        console.log('name :'+ name)
    }
})
const listBanner = document.getElementsByClassName('banner-img');
let indexBanner = 0;
processBanner();

// Next Banner
function nextBanner() {
    indexBanner += 1;

    processBanner();
}

// Fungsi Process Banner
function processBanner() {
    console.log(listBanner);

    // Jika indexBanner lebih dari panjang listBanner
    // maka indexBanner di set ke 0
    if (indexBanner >= listBanner.length) {
        indexBanner = 0;
    }

    // Hide All Banner
    for (let index = 0; index < listBanner.length; index++) {
        listBanner[index].style.display = 'none';
    }

    // Panggil Show Banner
    showBanner(indexBanner);
}

// Fungsi Show Banner
function showBanner(index) {
    listBanner[index].style.display = 'block';
}

// Fungsi Validasi Form
function validasiForm() {
    // Ambil DOM Input Name di Form
    const nameInput = document.getElementById('name-input');

    // Kondisi Penentu
    if (nameInput.value === '') {
        alert('Inputan Anda Kosong');
    } else {
        alert('Berhasil mengirim form');
    }

    const dateInput = document.getElementById('date-input');

    // Kondisi Penentu
    if (dateInput.value === '') {
        alert('Inputan Anda Kosong');
    } else {
        alert('Berhasil mengirim form');
    }

    const peopleInput = document.getElementById('people-input');

    // Kondisi Penentu
    if (peopleInput.value === '') {
        alert('Inputan Anda Kosong');
    } else {
        alert('Berhasil mengirim form');
    }
}


// Untuk Otomasi
setInterval(nextBanner, 3000);