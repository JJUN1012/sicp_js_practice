function flatmap(f, seq){
    return accumulate(append, null, map(f, seq));
}

function square1(x){
    return list(x * x);
}

const s = list(1, 2, 3);

display_list(flatmap(square1, s));

function permutations(s){
    return is_null(s)
        ? list(null)
        : flatmap(x => map(p => pair(x, p), permutations(remove(x, s))), s);
}

display_list(permutations(s));
