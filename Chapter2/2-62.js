function adjoin_set(x, set){
    return is_null(set)
        ? list(x)
        : x === head(set)
        ? set
        : x > head(set)
        ? pair(head(set), adjoin_set(x, tail(set)))
        :pair(x, set);
}

function union_set(set1, set2){
    return is_null(set1)
        ? set2
        : is_null(set2)
        ? set1
        : head(set1) === head(set2)
        ? pair(head(set1), union_set(tail(set1), tail(set2)))
        : head(set1) < head(set2)
        ? pair(head(set1), union_set(tail(set1), set2))
        : pair(head(set2), union_set(set1, tail(set2)));
}

union_set(
   adjoin_set(10, adjoin_set(20, adjoin_set(30, null))),
   adjoin_set(10, adjoin_set(15, adjoin_set(20, null))));
