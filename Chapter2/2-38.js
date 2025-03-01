const fold_right = accumulate;

function fold_left(op, init, seqs){
    function iter(result, rest){
        return is_null(rest)
            ? result
            : iter(op(result, head(rest)), tail(rest));
    }
    return iter(init, seqs);
}

function divide(x, y) {return x / y;}

display(fold_right(divide, 1, list(1, 2, 3))); 
display(fold_left(divide, 1, list(1, 2, 3))); 
display_list(fold_right(list, null, list(1, 2, 3)));
display_list(fold_left(list, null, list(1, 2, 3)));

/*
if op is commutative and associative(ex: plus or times), 
the results of fold_right & fold_left can be the same.
*/

function plus(x, y){return x + y;}
function times(x, y){return x * y;}

display(fold_right(plus, 0, list(1, 2, 3))); 
display(fold_left(plus, 0, list(1, 2, 3))); 
display_list(fold_right(times, 1, list(1, 2, 3)));
display_list(fold_left(times, 1, list(1, 2, 3)));
