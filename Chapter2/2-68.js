function make_leaf(symbol, weight) {
    return list("leaf", symbol, weight);
}
function is_leaf(object) {
    return head(object) === "leaf";
}
function symbol_leaf(x) { return head(tail(x)); }
function weight_leaf(x) { return head(tail(tail(x))); }
function left_branch(tree) { return head(tail(tree)); }
function right_branch(tree) { return head(tail(tail(tree))); }
function symbols(tree) {
    return is_leaf(tree)
           ? list(symbol_leaf(tree))
           : head(tail(tail(tail(tree))));
}
function weight(tree) {
    return is_leaf(tree)
           ? weight_leaf(tree)
           : head(tail(tail(tail(tail(tree)))));
}
function make_code_tree(left, right) {
    return list("code_tree", left, right,
                append(symbols(left), symbols(right)),
                weight(left) + weight(right));
}
function decode(bits, tree) {
    function decode_1(bits, current_branch) {
        if (is_null(bits)) {
            return null;
        } else {
            const next_branch = choose_branch(head(bits),
                                              current_branch);
            return is_leaf(next_branch)
                   ? pair(symbol_leaf(next_branch),
                          decode_1(tail(bits), tree))
                   : decode_1(tail(bits), next_branch);
        }
    }
    return decode_1(bits, tree);
}
function choose_branch(bit, branch) {
    return bit === 0
           ? left_branch(branch)
           : bit === 1
           ? right_branch(branch)
           : error(bit, "bad bit -- choose_branch");
}
function encode(message, tree) {
    return is_null(message)
           ? null
           : append(encode_symbol(head(message), tree),
                    encode(tail(message), tree));
}
const sample_tree = make_code_tree(make_leaf("A", 4),
                                   make_code_tree(make_leaf("B", 2),
                                                  make_code_tree(
                                                      make_leaf("D", 1),
                                                      make_leaf("C", 1))));
const sample_message = list(0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0);

function code_tree_to_list(tree) {
    return is_leaf(tree)
        ? list(tree)
        : append(code_tree_to_list(left_branch(tree)), code_tree_to_list(right_branch(tree)));
}

function encode_symbol(chr, tree){
    if(is_leaf(tree)){
        return null;
    }else{
        const left_set = code_tree_to_list(left_branch(tree));
        const right_set = code_tree_to_list(right_branch(tree));
        return is_leaf_of_set(chr, left_set)
            ? pair(0, encode_symbol(chr, left_branch(tree)))
            : is_leaf_of_set(chr, right_set)
            ? pair(1, encode_symbol(chr, right_branch(tree)))
            : error(chr, "bad symbol -- encode_symbol");
    }
}

function is_leaf_of_set(chr, set){
    return is_null(set)
        ? false
        : equal(chr, symbol_leaf(head(set)))
        ? true
        : is_leaf_of_set(chr, tail(set));
}

display_list(sample_message);
const decoded_msg = decode(sample_message, sample_tree);
display_list(decoded_msg);
const encoded_msg = encode(decoded_msg, sample_tree);
display_list(encoded_msg);
