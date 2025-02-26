function square_tree(items){
    return is_null(items)
         ? null 
         : !is_pair(items)
         ? items * items
         : pair(square_tree(head(items)), square_tree(tail(items)));
}

function square_tree_map(items){
    return map(tree => is_pair(tree)
                    ? square_tree_map(tree)//it is tree
                    : tree * tree//it is number
                    , items);
}

display_list(square_tree(list(1,list(2, list(3, 4), 5), list(6, 7))));
display_list(square_tree_map(list(1,list(2, list(3, 4), 5), list(6, 7))));