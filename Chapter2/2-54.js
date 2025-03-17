function equal(a, b){
    return !is_pair(a) || !is_pair(b)
        ? a === b
        : equal(head(a), head(b)) && equal(tail(a), tail(b));
}

display(equal(list("this", "is", "a", "list"), list("this", "is", "a", "list")));
display(equal(list("this", "is", "a", "list"), list("this", "isn't", "a", "list")));
