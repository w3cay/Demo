//1 1 2 3 5 8 13 21
//0 1 2 3 4 5 6  7
function getNthFibonacci(count) {
    var x = parseInt(count);
    if(isNaN(x) || x <= 0) {
        return 0;
    } else if(x == 1) {
        return 1;
    } else {
        return arguments.callee(x - 1) + arguments.callee(x - 2);
    }
}
