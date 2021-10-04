const consecZero = (dec) =>
{
  function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
let num = dec2bin(dec);

  let str = num.toString();
  let hasil = 0; 
  for( i = 0 ; i < str.length-1; i++){
    if (str.charAt(i) == 0 && str.charAt(i+1) == 0)
    hasil += 1;
  }
var a = ['','satu ','dua ','tiga ','empat ', 'lima ','enam ','tujuh ','delapan ','sembilan ','sepuluh ','sebelas ','duabelas ','tigabelas ','empatbelas ','limabelas ','enambelas ','tujuhbelas ','delapanbelas ','sembilan belas '];
var b = ['', '', 'dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh','tujuh puluh','delapan puluh','sembilan puluh'];

function inWords (hasil) {
    if ((hasil = hasil.toString()).length > 9) return 'overflow';
    n = ('000000000' + hasil).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'milyar ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'juta ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'ribu ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'ratus ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
}
return inWords(hasil);

}

console.log(consecZero(25));