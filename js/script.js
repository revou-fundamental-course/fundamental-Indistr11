//ini javascript
function replaceName(){
    let name = prompt("Hallo siapakah nama anda?","");
    document.getElementById("name").innerHTML=name

}

document.getElementById('tombol').addEventListener("click", function(){
    replaceName()
})

function showSlide(){
    document.getElementsByClassName('banner-item')[0].style.display='none';
}

const messageForm = document.getElementById("messageForm");
const resultDiv = document.getElementById("result");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validate form inputs
  if (document.getElementById("nama").value === "" || document.getElementById("tanggalLahir").value === "" || document.getElementById("pesan").value === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Get input values
  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("tanggalLahir").value;
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  // Create HTML content
  const htmlContent = `
    <h2>Result</h2>
    <p>Nama: ${nama}</p>
    <p>Tanggal Lahir: ${tanggalLahir}</p>
    <p>Jenis Kelamin: ${jenisKelamin}</p>
    <p>Pesan: ${pesan}</p>
  `;

  // Update resultDiv with HTML content
  resultDiv.innerHTML = htmlContent;
});