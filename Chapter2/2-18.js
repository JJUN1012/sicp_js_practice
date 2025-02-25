function reverse (list1){
    function reverse_iter(list1, list2){
        return is_null(tail(list1))
            ? [head(list1), list2]
            : reverse_iter(tail(list1), [head(list1), list2]);
    }
    return reverse_iter(list1, null);
}

reverse(list(1,2,3,4,5));