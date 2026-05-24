// 1. Validasi Login
const loginForm = document.getElementById('loginform');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => { 
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (email === "admin@ut.ac.id" && pass == "12345" )
        {
        window.location.href = "dashboard.html";
        }
        else
        {
        alert("email/password yang anda masukkan salah");
        }
    });
}

//2. Greeting Berdasarkan Waktu
function displayGreeting() {
    const hours = new Date().getHours();
    let message = "Selamat  ";
    if (hours < 12) message +="Pagi";
    else if (hours < 18) message +="Siang";
    else message +="Sore"

    const element = document.getElementById('greetingText');
    if (element) element.innerText = message ;
}

//3. Modal Logic
function showModal(id)
    {
    document.getElementById(id).style.display = "block" ;
    }
function closeModal(id)
    {
    document.getElementById(id).sryle.display = "none" ;
    }

//4. Tambah Baris Stok (Untuk stok.html)
function addStockRow() 
    {
    const table = document.getElementById("stokTable");
    const row = table.insertRow(-1);
    row.innerHTML = "<td>NEW-01</td><td>Modul Baru</td><td>BMP</td><td>1</td><td>0</td>";
    }

//Fungsi untuk mencari data tracking
function searchTracking() { 
    const noD0 = document.getElementById('inputD0').value;
    const resultDiv = document.getElementById('trackingResult');

    // Mengambil data dari dataTracking yang ada di data.js
    const data = dataTracking[noD0];

    if (data) 
    { 
        resultDiv.innerHTML = <div style="background: #e9ecef; padding: 15px; border-radius: 8px;">
            <h4>Hasil Pelacakan: ${noD0}</h4>
            <p><strong>Nama Mahasiswa:</strong> ${data.nama}</p>
            <p><strong>Status:</strong><span style="color: blue;">${data.status}</span></p>
            <hr>
            <p>Ekspedisi: ${data.ekspedisi} | Tanggal: ${data.tgl}</p>
            <p>Jenis Paket : %{data.paket} | Total: ${data.total}</p>
        </div>
        ';
    }
    else
    {
        alert("Nomor Delivery Order tidak ditemukan!");
        resultDiv.innerHTML = "";
    }
}

// Fungsi Untuk Menampilkan data stok awal saat halaman dimuat
function renderStockTable() {
    const tbody = document.getElementById('stokBody');
    if (!tbody) return;

    tbody.innerHTML = ""; //Bersihkan Tabel
    dataBahanAjar.foreach(item =>
    {
            const row = tbody.insertRow();
            row.innerHTML = 
             <td>${item.kode}</td>
             <td>${item.nama}</td>
             <td>${item.jenis}</td>
             <td>${item.edisi}</td>
             <td>${item.stok}</td>
       ';
    });
}

//Fungsi untuk menambahkan baris stok baru secara dinamis
function addStockRow()
{ 
const tbody = document.getElementById('stokBody');
const newRow = tbody.insertRow();

    //Simulasi input data baru
    newrow.innerHTML = 
        <td><input type="text" placeholder="Kode"></td>
        <td><input type="text" placeholder="Nama"></td>
        <td>BMP</td>
        <td>1</td>
        <td><input type="number" value="0"></td>
    ';
    // Anda bisa mengembangkannya dengan modal box sesuai permintaan tugas
}