function isFibonacci(number) {
    let fibo0 = 0;
    let fibo1 = 1;
    let fiboTemp = 0;
    let flag = false;
    while (fiboTemp <= number) {
        if (fiboTemp == number) {
            flag = true;
            break;
        } else {
            fiboTemp = fibo0 + fibo1;
            fibo0 = fibo1;
            fibo1 = fiboTemp;
        }
    }
    return flag;
}
function displayisFibo() {
    let a =+ document.getElementById('number').value;
    let result = isFibonacci(a);
    document.getElementById('notif').innerHTML = result;
}
// console.log(isFibonacci(0));