function is_variable(x) { return is_string(x); }

function is_same_variable(v1, v2) {
    return is_variable(v1) && is_variable(v2) && v1 === v2;
}

function deriv(exp, variable) {
    return is_number(exp)
           ? 0
           : is_variable(exp)
           ? is_same_variable(exp, variable) ? 1 : 0
           : get("deriv", operator(exp))(operands(exp), variable);
}
function operator(exp) { return head(exp); }

function operands(exp) { return tail(exp); }

function make_sum(a1, a2) {
    return list("+", a1, a2);
}
            
function make_product(m1, m2) {
    return list("*", m1, m2);
}
            
function addend(operands) {
    return head(operands);
}
            
function augend(operands) {
    return head(tail(operands));
}
            
function multiplier(operands) {
    return head(operands);
}
            
function multiplicand(operands) {
    return head(tail(operands));
}
function make_exp(base, exp) {
    return list("**", base, exp);
}
function base(operands) {
    return head(operands);
}
function exponent(operands) {
    return head(tail(operands));
}


//operation table from 3.3.3
function assoc(key, records) {
    return is_null(records)
           ? undefined
           : equal(key, head(head(records)))
           ? head(records)
           : assoc(key, tail(records));
}
function make_table() {
    const local_table = list("*table*");
    function lookup(key_1, key_2) {
        const subtable = assoc(key_1, tail(local_table));
        if (is_undefined(subtable)) {
            return undefined;
        } else {
            const record = assoc(key_2, tail(subtable));
            return is_undefined(record)
                   ? undefined
                   : tail(record);
        }
    }
    function insert(key_1, key_2, value) {
        const subtable = assoc(key_1, tail(local_table));
        if (is_undefined(subtable)) {
            set_tail(local_table,
                     pair(list(key_1, pair(key_2, value)),
                          tail(local_table)));
        } else {
            const record = assoc(key_2, tail(subtable));
            if (is_undefined(record)) {
                set_tail(subtable,
                         pair(pair(key_2, value), tail(subtable)));
            } else {
                set_tail(record, value);
            }
        }
    }
    function dispatch(m) {
        return m === "lookup"
               ? lookup
               : m === "insert"
               ? insert
               : error(m, "unknown operation -- table");
    }
    return dispatch;
}
const operation_table = make_table();
const get = operation_table("lookup");
const put = operation_table("insert");

function install_deriv_package(){
    function deriv_sum(exp, variable){
        return make_sum(deriv(head(exp), variable),
                        deriv(head(tail(exp)), variable));
    }
    function deriv_product(exp, variable){
        return make_sum(make_product(head(exp), deriv(head(tail(exp)), variable)),
                        make_product(deriv(head(tail(exp)), variable), head(exp)));
    }
    function deriv_exp(exp, variable){
        return make_product(make_product(head(tail(exp)), make_exp(head(exp), head(tail(exp)) - 1)), 
                            deriv(head(exp), variable));
    }
    put("deriv", "+", deriv_sum);
    put("deriv", "*", deriv_product);
    put("deriv", "**", deriv_exp);
    return "done";
}

install_deriv_package();

display_list(deriv(list("*", list("*", "x", "y"), list("+", "x", 3)), "x"));
display(deriv(list("**", "x", 4), "x"));
