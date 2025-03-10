function flatmap(f, seq) {
    return accumulate(append, null, map(f, seq));
}

function enumerate_interval(low, high) {
    return low > high
           ? null
           : pair(low,
                  enumerate_interval(low + 1, high));
}

function queens(board_size) {
    function queen_cols(k) {
        return k === 0
               ? list(empty_board)
               : filter(positions => is_safe(k, positions),
                        flatmap(rest_of_queens =>
                                  map(new_row =>
                                        adjoin_position(new_row, k,
                                                        rest_of_queens),
                                      enumerate_interval(1, board_size)),
                                queen_cols(k - 1)));
    }
    return queen_cols(board_size);
}

const empty_board = null;

function adjoin_position(new_row, k, rest_of_queens){
    return pair(pair(new_row, k), rest_of_queens);
}

function is_safe(k, positions){
    const checking = head(positions);
    function is_safe_iter(checking_column, pos){
        return checking_column === 0
            ? true
            :head(head(pos)) === head(checking)||
             head(head(pos)) - (k - checking_column) ===  head(checking)||
             head(head(pos)) + (k - checking_column) ===  head(checking)
            ? false
            :is_safe_iter(checking_column - 1, tail(pos));
    }
    return is_safe_iter(k - 1, tail(positions));
}

queens(8);
