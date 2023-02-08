// BT1: Yêu cầu: Dom đến các thẻ div, p , span thay đổi font-size: 30px, và màu của chữ thành màu đỏ/

// document.getElementById('btnThayDoi').onclick = function () {
//     var tagID = domID('output');
//     var fontSize = Number(tagID.style.fontSize.replace('px',''));
//     tagID.style.fontSize = fontSize 
// }

// function domID(id) {
//     return document.getElementById(id);

// }

/* Khai báo hàm */

/*
    Ý nghĩa hàm: dùng để tái sử dụng lại đoạn code xử lý nào đó theo 1 chức năng cụ thể
*/
function changeSizeColor (size,color,id) {

    //input: các giá trị có thể bị thay đổi

    document.getElementById(id).style.fontSize = size;
    document.getElementById(id).style.color = color;

    //output
}


// Lệnh gọi hàm : tenHam (gia_tri_input)

changeSizeColor('30px','orange','output-div');
changeSizeColor('30px','red','output-p');
changeSizeColor('30px','blue','output-span');


// Ví dụ về hàm:
// Viết hàm tính lương dựa trên số giờ làm và tiền lương trên giờ

function tinhLuong (tienLuong1h,soGioLam) {
    //input : tienLuong1h - soGioLam 

    //output
    var tienLuongOutPut = 0;

    //process
    tienLuongOutPut = tienLuong1h * soGioLam;

    return tienLuongOutPut; 
    //lệnh return là lệnh trả ra output của hàm và kết thúc hàm, các đoạn  code sau lệnh return sẽ không chạy
}

var tongLuong = tinhLuong(10,100) +500;
console.log('Tổng lương là:', tongLuong)


//NGÔI NHÀ
// Bài 1
// Yêu cầu 1 viết hàm thay đổi kích thước của 1 thẻ html có id nào đó

//Yêu cầu 2 : sử dụng hàm trong sự kiện click của 2 button tương ứng


var fontSize = 100;

function changeFontSize(id,size) {
    document.getElementById(id).style.fontSize = size + 'px';
}

document.getElementById('btnTang').onclick = function () {
    fontSize = fontSize + 5;

    changeFontSize('home'.fontSize);
}