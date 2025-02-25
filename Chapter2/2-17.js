function last_pair(list1){
    return is_null(tail(list1))
        ? list1
        : last_pair(tail(list1));
}

last_pair(list(23, 72, 149, 34));