const x = list(list(1, 2), list(3, 4), 5 , list(6, 7, 8));

function deep_reverse(x){
    function reverse_iter(y, z){
        return is_null(tail(y))
            ? pair(deep_reverse(head(y)), z)
            : reverse_iter(tail(y), pair(deep_reverse(head(y)), z));
    }
    return !is_pair(x)
        ? x
        : reverse_iter(x,list());
}

display_list(deep_reverse(x));