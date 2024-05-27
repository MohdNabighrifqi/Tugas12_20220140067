function kirimdata(){
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.getElementById("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;
    var tanggal = document.getElementById("tanggal").value;
    var angkatan = document.getElementById("angkatan").value;

    alert(
        "Nama: "+ nama +
        "\nNIM: "+ nim +
        "\nPeminatan: "+ peminatan +
        "\nAlamat: "+ alamat +
        "\nTanggal: "+ tanggal +
        "\nAngkatan "+ angkatan 
    );
}
var tanggalInput = document.getElementById("tanggal");
flatpickr(tanggalInput, {
    enableTime : false,
    dateFormat : 'd-m-y',
});