function pair(a, b){
    return math_pow(2, a) * math_pow(3, b);
}
function head(p){
    function head_iter(count, n){
        return n % 2 === 0
            ? head_iter(count + 1, n / 2)
            : count;
    }
    return head_iter(0, p);
}

function tail(p){
    function tail_iter(count, n){
        return n % 3 === 0
            ? tail_iter(count + 1, n / 3)
            : count;
    }
    return tail_iter(0, p);
}

//example
const pair1 = pair(5, 8);
display(head(pair1));
display(tail(pair1));