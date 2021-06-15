// Bai 1
var soNhoNhat = document.getElementById('soNhoNhat');
var tong = 0;
var num = 0;
for (i = 0; i <= num; i++) {
    tong = tong + i;
    if (tong > 10000) {
        break;
    }
    num++;
}
soNhoNhat.innerHTML = 'Số nguyên dương nhỏ nhất là: ' + i;
console.log(i)

//Bai 2:
document.getElementById('btnTinh').addEventListener('click', function() {
    var ipX = Number(document.getElementById('ipX').value);
    var ipN = Number(document.getElementById('ipN').value);
    var total = 0;
    if (isNaN(ipX) || isNaN(ipN)) {
        alert('yêu cầu nhập số!!');
        return;
    }
    if (ipN <= 0) {
        alert('Yêu cầu nhập lại số n');
        return;
    }
    for (i = 1; i <= ipN; i++) {
        total += Math.pow(ipX, i);
    }
    divTinhTong.style.display = 'block';
    divTinhTong.innerHTML = 'Tổng là: ' + total;
})

//Bài 3
document.getElementById('btnGiaiThua').addEventListener('click', function() {
    var ipSoGiaiThua = Number(document.getElementById('ipSoGiaiThua').value);
    var giaiThua = 1;
    if (isNaN(ipSoGiaiThua)) {
        alert('yêu cầu nhập số !!');
        return;
    }
    if (ipSoGiaiThua !== parseInt(ipSoGiaiThua)) {
        alert('yêu cầu nhập số nguyên!!');
        return;
    }
    if (ipSoGiaiThua < 0) {
        alert('Số giai thừa phải lớn hơn 0!!')
        return;
    }
    for (i = 1; i <= ipSoGiaiThua; i++) {
        giaiThua = giaiThua * i;
    }
    divGiaiThua.style.display = 'block';
    divGiaiThua.innerHTML = 'Giai thừa của ' + ipSoGiaiThua + ' là: ' + giaiThua;
})

// Bai 4

document.getElementById('btnInDiv').addEventListener('click', function() {
    var myDiv = document.getElementById('myDiv');
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            myDiv.innerHTML += '<div style="background-color: red; padding: 10px;"> Div chẵn ' + i + '</div>';
        } else {
            myDiv.innerHTML += '<div style="background-color: blue; padding: 10px;"> Div lẻ ' + i + '</div>';
        }
    }
    // divs = myDiv.getElementsByTagName('div')
    // for (i = 0; i < divs.length; i++) {
    //     if ((i + 1) % 2 == 0) {
    //         divs[i].style.background = 'red';
    //     } else {
    //         divs[i].style.background = 'blue';
    //     }
    // }
    myDiv.style.display = 'block';
})