// fungsi menampilkan data dari tiap button berupa "return" button value yang diinput
function dispFunction(data1) {
    document.calcudev.screen.value = document.calcudev.screen.value+data1;
}

// fungsi untuk menampilkan hasil sebagai "=" atau sama dengan
function samaDengan() {
	var hasil = document.calcudev.screen.value;
	if(hasil) {
	  document.calcudev.screen.value = eval(hasil)
	  }
}

// fungsi untuk melakukan clear data
function hapusFunction() {
	document.calcudev.screen.value = "";
}

// fungsi untuk persentase
function percFunction() {
	document.calcudev.screen.value = document.calcudev.screen.value/100;
}