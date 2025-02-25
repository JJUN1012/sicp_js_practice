function plus_curried(x) {
    return y => x + y;
}

function brooks(func, items){
    return is_null(tail(items))
        ? head(items)
        : brooks(func, [func(head(items))(head(tail(items))), tail(tail(items))]);
}

display(brooks(plus_curried, list(3, 4, 5)));

function brooks_curried(items){
    return brooks(head(items), tail(items));
}

display(brooks_curried(list(plus_curried, 4, 5, 6)));


//what's wrong
display(brooks_curried(list(brooks_curried, list(plus_curried, 3, 4))));
display(brooks_curried(list(brooks_curried, list(brooks_curried, list(plus_curried, 3, 4)))));