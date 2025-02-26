function fringe(items){
    return is_null(items)
        ? null 
        : is_pair(head(items))
        ? append(fringe(head(items)), fringe(tail(items)))
        : pair(head(items), fringe(tail(items)));
}

const x = list(list(1, 2), list(3, list(4, 5)));

display_list(fringe(x));