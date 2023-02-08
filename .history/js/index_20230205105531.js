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


