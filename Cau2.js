//Viết hàm nhận vào tham số đầu vào là 1 mảng array và 1 số elem:

function tryRemoveFromArray(array, elem) {
    //Dùng vòng lặp for để duyệt mảng
    let arrTemp = [];
    for (let i = 0; i < array.length; i++) {
        //Dùng toán tử delete để xóa phần tử elem tại i nếu tìm thấy elem
        if (array[i] === elem) {
            delete array[i] ;
        }
    }
    return array;
}

let arr = [1, 2, 3, 4, 4,4,4,4,4,5];
document.getElementById('before').innerHTML = ("Mảng trước khi xóa :"+ arr );

document.getElementById('result').innerHTML = ("Mảng sau khi xóa :"+ tryRemoveFromArray(arr, 4));