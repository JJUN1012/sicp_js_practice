function gcd(a, b){
    return b === 0 ? a : gcd(b, a % b);
}

function make_rat(n, d){
    const g = gcd(n, d);
    return pair(n/g, d/g);
}

const rat1 = make_rat(10, -2);


function numer(x){ return head(x); }
function denom(x){ return tail(x); }

function print_rat(x){
    return display(stringify(numer(x)) + " / " +stringify(denom(x)));
}

print_rat(rat1);
