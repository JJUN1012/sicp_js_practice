function is_variable(x) { return is_string(x); }

function is_same_variable(v1, v2) {
    return is_variable(v1) && is_variable(v2) && v1 === v2;
}

function number_equal(exp, num){
    return is_number(exp) && exp === num;
}

function make_sum(a1, a2) {
    return number_equal(a1, 0)
        ? a2
        : number_equal(a2, 0)
        ? a1
        : is_number(a1) && is_number(a2)
        ? a1 + a2
        : list("+", a1, a2);
}
function is_sum(x) {
    return is_pair(x) && head(x) === "+";
}

function addend(s) { return head(tail(s)); }

function augend(s) {
    return is_null(tail(tail(tail(s))))
        ? head(tail(tail(s)))
        : make_sum(head(tail(tail(s))), augend(tail(s)));
}
/*
function augend(s) {
    return accumulate(make_sum, 0, tail(tail(s)));
}
*/

function make_product(m1, m2) {
    return number_equal(m1, 0) || number_equal(m2, 0)
        ? 0
        : number_equal(m1, 1)
        ? m2
        : number_equal(m2, 1)
        ? m1
        : is_number(m1) && is_number(m2)
        ? m1 * m2
        :list("*", m1, m2);
}

function is_product(x) {
    return is_pair(x) && head(x) === "*";
}

function multiplier(s) { return head(tail(s)); }

function multiplicand(s) {
        return is_null(tail(tail(tail(s))))
        ? head(tail(tail(s)))
        : make_product(head(tail(tail(s))), multiplicand(tail(s)));
}
/*
function multiplicand(s) {
    return accumulate(make_product, 1, tail(tail(s)));
}
*/

function make_exp(base, exp){
    return number_equal(exp, 0)
        ? 1
        : number_equal(exp, 1)
        ? base
        : list("**", base, exp);
}

function base(x){
    return head(tail(x));
}

function exponent(x){
    return head(tail(tail(x)));
}

function is_exp(x){
    return is_pair(x) && head(x) === "**"; //x값이 pair가 아니라면 head를 구할 수가 없기에 먼저 is_pair
}

function deriv(exp, variable) {
    return is_number(exp)
           ? 0
           : is_variable(exp)
           ? is_same_variable(exp, variable) ? 1 : 0
           : is_sum(exp)
           ? make_sum(deriv(addend(exp), variable),
                      deriv(augend(exp), variable))
           : is_product(exp)
           ? make_sum(make_product(multiplier(exp),
                                   deriv(multiplicand(exp),
                                         variable)),
                      make_product(deriv(multiplier(exp),
                                         variable),
                                   multiplicand(exp)))
           : is_exp(exp)
           ? make_product(make_product(exponent(exp), make_exp(base(exp), exponent(exp) - 1)), deriv(base(exp), variable))
           : error(exp, "unknown expression type -- deriv");
}

display_list(deriv(list("*", "x", "y", list("+", "x", 3)), "x"));
