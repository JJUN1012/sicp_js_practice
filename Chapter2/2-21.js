function square(x){
    return x * x;
}

function square_list(items){
    return is_null(items)
        ? null
        : pair(head(items) * head(items), square_list(tail(items)));
}

function square_list2(items){
    return map(square, items);
}

display_list(square_list(list(1,2,3,4)));
display_list(square_list2(list(4,3,2,1)));