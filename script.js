// Fungsi untuk menghitung usia berdasarkan input tanggal lahir
// dan menampilkannya di kotak kecil di sebelah kanan input date dengan efek bayangan

document.getElementById("tanggal").addEventListener("input", function () {
  const inputDate = new Date(this.value); // ambil nilai dari input date
  const today = new Date(); // tanggal hari ini
  let age = today.getFullYear() - inputDate.getFullYear();
  const m = today.getMonth() - inputDate.getMonth();

  // logika jika belum ulang tahun di tahun ini
  if (m < 0 || (m === 0 && today.getDate() < inputDate.getDate())) {
    age--;
  }

  document.getElementById("usia").value = age; // tampilkan hasil umur
});

// Fungsi untuk menambahkan data ke kotak output sebelah kanan dengan efek bayangan
function tambahData() {
  const nama = document.getElementById("nama").value;
  const tanggalRaw = document.getElementById("tanggal").value;
  const usia = document.getElementById("usia").value;
  const kelas = document.getElementById("kelas").value;
  const jurusan = document.getElementById("jurusan").value;

  const output = document.getElementById("output");

  // Format tanggal jadi dd/mm/yyyy
  const tanggalObj = new Date(tanggalRaw);
  const dd = String(tanggalObj.getDate()).padStart(2, '0');
  const mm = String(tanggalObj.getMonth() + 1).padStart(2, '0');
  const yyyy = tanggalObj.getFullYear();
  const formattedTanggal = `${dd}/${mm}/${yyyy}`;

  // Tambahkan data ke output box dalam format HTML + efek bayangan
  const newEntry = document.createElement("div");
  newEntry.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  newEntry.style.padding = "10px";
  newEntry.style.marginBottom = "10px";
  newEntry.style.borderRadius = "6px";
  newEntry.style.backgroundColor = "#ffffff";
  newEntry.innerHTML = `
    <strong>Nama:</strong> ${nama}<br>
    <strong>Tanggal Lahir:</strong> ${formattedTanggal} (${usia} tahun)<br>
    <strong>Kelas:</strong> ${kelas}<br>
    <strong>Jurusan:</strong> ${jurusan}
  `;

  output.appendChild(newEntry);
  output.innerHTML += "<hr>";
}

// Fungsi untuk menghapus seluruh isi data yang sudah ditampilkan sebelumnya
function hapusData() {
  const output = document.getElementById("output");
  output.innerHTML = ""; // kosongkan semua isi kotak output
}
