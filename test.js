function map(fun, items){ //List mapping function(p.172)
	return is_null(items)
		? null
		: pair(fun(head(items)),
			  map(fun, tail(items)));
}

function filter (predicate, sequence){
	return is_null(sequence)
		? null
		: predicate(head(sequence))
		? pair(head(sequence),
			  filter(predicate, tail(sequence)))
		: filter(predicate, tail(sequence));
}

function is_odd(number){
    return number % 2 === 0
        ? false
        :true;
}

filter(x => x % 2 === 1, list(1,2,3,4,5));