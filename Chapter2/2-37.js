function plus(x, y) {return x + y;}
function times(x, y) {return x * y;}
function accumulate_n(op, init, seqs){
    return is_null(head(seqs))
            ? null 
            : pair(accumulate(op, init, map(head, seqs)),
                    accumulate_n(op, init, map(tail, seqs)));
}
function dot_product(v, w) {
    return accumulate(plus, 0, accumulate_n(times, 1, list(v, w)));
}

display(dot_product(list(1, 2), list(3, 4)));

function matrix_times_vector(m, v){
    return map(row => dot_product(row, v), m);
}

function transpose(mat){
    return accumulate_n(pair, null, mat);
}

function matrix_times_matrix(n, m){
    const cols = transpose(m);
    return map(row => map(col => dot_product(row, col), cols), n);
}

const v = list(10, 20, 30);
const m1 = list(list(1, 2, 3), list(3, 5, 1), list(1, 1, 1));
const m2 = list(list(1, 2), list(4, 5), list(7, 8));

display_list(matrix_times_vector(m1, v));
display_list(transpose(m1));
display_list(matrix_times_matrix(m1, m2));
