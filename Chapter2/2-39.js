const fold_right = accumulate;

function fold_left(op, init, seqs){
    function iter(result, rest){
        return is_null(rest)
            ? result
            : iter(op(result, head(rest)), tail(rest));
    }
    return iter(init, seqs);
}

//x: result y: sequence element
function reverse(sequence){
    return fold_right((x, y) => append(y, list(x)), null, sequence);
}

display_list(reverse(list(1, 4, 5, 9, 16, 25)));

function reverse2(sequence){
    return fold_left((x, y) => pair(y, x), null, sequence);
}

display_list(reverse2(list(1, 4, 5, 9, 16, 25)));
