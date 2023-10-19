// Mendefinisikan fungsi validasiForm
function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var artikel = document.getElementById("artikel").value;

    if (nama == "" || email == "" || artikel == "") {
        alert("Harap isi semua kolom!");
        return false;
    }

    return true;
}
