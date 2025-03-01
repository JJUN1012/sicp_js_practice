function enumerate_interval(low, high) {
    return low > high
           ? null
           : pair(low,
                  enumerate_interval(low + 1, high));
}
function flatmap(f, seq) {//when using nested map, remove duplicate lists
    return accumulate(append, null, map(f, seq));
}
function plus(x, y) {
    return x + y;
}

function unique_triples(n){
    return flatmap(x => 
                flatmap(y => 
                    map(z => list(x, y, z) ,enumerate_interval(y + 1, n)),
                enumerate_interval(x + 1, n - 1)),
           enumerate_interval(1, n - 2));
}

function find_triples_with_sum(sum_value, n){
    return filter(triple => sum_value === accumulate(plus, 0, triple), unique_triples(n));
}

display_list(find_triples_with_sum(10, 6));
