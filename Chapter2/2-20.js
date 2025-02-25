function plus_curried(x) {
    return y => x + y;
}

function brooks(func, items){
    return is_null(tail(items))
        ? head(items)
        : brooks(func, [func(head(items))(head(tail(items))), tail(tail(items))]);
}

brooks(plus_curried, list(3, 4, 5));