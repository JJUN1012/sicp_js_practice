function tree_map(func, tree){
    return is_pair(tree)
        ? pair(tree_map(func, head(tree)), tree_map(func, tail(tree)))
        : is_null(tree)
        ? null 
        : func(tree);
}

function square(x) {
    return x * x;
}

display_list(tree_map(square, list(1, list(2, list(3, 4), 5), list(6, 7))));