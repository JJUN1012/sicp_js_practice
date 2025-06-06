function entry(tree) { return head(tree); }
function left_branch(tree) { return head(tail(tree)); }
function right_branch(tree) { return head(tail(tail(tree))); }
function make_tree(entry, left, right) { 
    return list(entry, left, right);
}
function make_record(key, data) {	  
    return pair(key, data);
}
function key(record) {    
    return head(record);
}
function data(record) {
    return tail(record);
}

function lookup(given_key, set_of_records){
    if(is_null(set_of_records)){
        return null;
    }else{
        return given_key === key(entry(set_of_records))
            ? entry(set_of_records)
            : given_key < key(entry(set_of_records))
            ? lookup(given_key, left_branch(set_of_records))
            : lookup(given_key, right_branch(set_of_records));
    }
}


const my_fav_planets =
    make_tree(make_record(4, "Mars"),	
              make_tree(make_record(2, "Venus"), 
                        null,
                        make_tree(make_record(3, "Earth"),
                                  null, null)),
              make_tree(make_record(6, "Saturn"),
                        make_tree(make_record(5, "Jupiter"),
                                  null, null),
                        null));

lookup(3, my_fav_planets);
