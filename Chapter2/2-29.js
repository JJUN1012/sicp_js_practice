function make_mobile(left, right){return list(left, right);}
function make_branch(length, structure){return list(length, structure);}

function left_branch(mobile){
    return head(mobile);
}
function right_branch(mobile){
    return head(tail(mobile));
}
function branch_length(branch){
    return head(branch);
}
function branch_structure(branch){
    return head(tail(branch));
}

function total_weight(items){
    return is_null(items)
        ? null 
        : !is_pair(items)
        //number is just a weight(if you check whether mobile or branch, it can make an error when a number is inputted)
        ? items
        : is_pair(head(items))//mobile(head is branch) or branch(head is length)?
        ? total_weight(left_branch(items)) + total_weight(right_branch(items))
        : total_weight(branch_structure(items));
}

const m = make_mobile(
              make_branch(10,
                  make_mobile(make_branch(10, 2), 
                      make_branch(4, 5))), 
              make_branch(10, 23));      
display(total_weight(m));

function is_balanced_mobile(items){
    function is_balanced_mobile_check(items){
        return(branch_length(left_branch(items)) * total_weight(branch_structure(left_branch(items))))
            ===(branch_length(right_branch(items))) * total_weight(branch_structure(right_branch(items)));
    }
    
    function is_balanced_mobile_iter(items){
        return !is_pair(items)
            ? true 
            : !is_balanced_mobile_check(items)
            ? false
            : !is_balanced_mobile_iter(branch_structure(left_branch))
            || !is_balanced_mobile_iter(branch_structure(right_branch))
            ? false 
            : true;
    }
    return is_balanced_mobile_iter(items);
}

is_balanced_mobile(m);