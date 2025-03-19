function is_element_of_set(x, set) {
    return is_null(set) 
           ? false
           : equal(x, head(set))
           ? true
           : is_element_of_set(x, tail(set));
}//same

function intersection_set(set1, set2) {
    return is_null(set1) || is_null(set2)
           ? null
           : is_element_of_set(head(set1), set2)
           ? pair(head(set1), intersection_set(tail(set1), set2))
           : intersection_set(tail(set1), set2);
}//same

function adjoin_set(x, set) {
    return pair(x, set);
}//O(n) -> O(1) It becomes very concise.

function union_set(set1, set2) {
    return append(set1, set2);
}//O(n^2) -> O(n) The computational complexity is greatly reduced, but there may be too many duplicate elements.
