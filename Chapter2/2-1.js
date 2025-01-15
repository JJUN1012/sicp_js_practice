function gcd(a, b){
    return b === 0 ? a : gcd(b, a % b);
}

function make_rat(n, d){
    const g = gcd(n, d);
    return pair(n/g, d/g);
}

make_rat(10, 2);
make_rat(-10, 2);
make_rat(-10, -2);
make_rat(10, -2);
