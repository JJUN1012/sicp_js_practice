function plus(x, y){return x + y;}

function count_leaves(t){
    return accumulate(plus, 0, map(x => !is_pair(x)
                                        ? 1
                                        : is_pair(head(x))
                                        ? count_leaves(head(x)) + count_leaves(tail(x))
                                        : 1 + count_leaves(tail(x)),
                        t));
}

count_leaves(pair(list(1, 2), list(3, list(4, 5, 6), 7)));