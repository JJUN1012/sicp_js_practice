function enumerate_interval(low, high) {//make interval list low to high
    return low > high
           ? null
           : pair(low,
                  enumerate_interval(low + 1, high));
}
function flatmap(f, seq){
    return accumulate(append, null, map(f, seq));
}
function make_pair_sum(p){
    return list(head(p), head(tail(p)),
                head(p) + head(tail(p)));
}
function is_prime_sum(p){
    return is_prime(head(p) + head(tail(p)));
}
function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function square(x){
    return x * x;
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}
function filter (predicate, sequence){
	return is_null(sequence)
		? null
		: predicate(head(sequence))
		? pair(head(sequence),
			  filter(predicate, tail(sequence)))
		: filter(predicate, tail(sequence));
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function unique_pairs(n){//not list of pairs. it's list of lists
    return flatmap(x => map(y => list(x, y), enumerate_interval(x + 1, n)),enumerate_interval(1, n - 1));
}
/*
study comment
list말고 pair로 처리하게 되면 list([1, 2], [1, 3], [2, 3])과 같이 깔끔하게 정리되지만,
list로 처리를 하지 않으면 is_prime_sum 이나 make_pair_sum과 같이 list로 된 pair를 받는 함수를 
사용할 수 없다. 만약 pair으로 사용하고 싶으면
make_pair_sum과 is_prime_sum을
function make_pair_sum(p){
    return list(head(p), tail(p),
                head(p) + tail(p));
}

function is_prime_sum(p){
    return is_prime(head(p) + tail(p));
}
과 같이 사용해야 할 것이다.
*/
display_list(unique_pairs(3));

function prime_sum_pairs(n){
    return map(make_pair_sum, filter(is_prime_sum, unique_pairs(n)));
}



display_list(prime_sum_pairs(10));
