function make_interval(x, y){ return pair(x, y);}

function lower_bound(interval){return head(interval);}
function upper_bound(interval){return tail(interval);}

function display_interval(interval){
    display("[" + stringify(lower_bound(interval)) + ", "
        + stringify(upper_bound(interval)) + "]");
}

function add_interval(x, y) {
    return make_interval(lower_bound(x) + lower_bound(y),
                         upper_bound(x) + upper_bound(y));
}

function mul_interval(x, y) {
    const p1 = lower_bound(x) * lower_bound(y);
    const p2 = lower_bound(x) * upper_bound(y);
    const p3 = upper_bound(x) * lower_bound(y);
    const p4 = upper_bound(x) * upper_bound(y);
    return make_interval(math_min(p1, p2, p3, p4),
                         math_max(p1, p2, p3, p4));
}

function div_interval(x, y) {
    return mul_interval(x, make_interval(1 / upper_bound(y),
                                         1 / lower_bound(y)));
}

function par1(r1, r2) {
    return div_interval(mul_interval(r1, r2),
                        add_interval(r1, r2));
}
function par2(r1, r2) {
    const one = make_interval(1, 1);
    return div_interval(one,
                        add_interval(div_interval(one, r1),
                                     div_interval(one, r2)));
}

display_interval(par1(pair(4, 6), pair(7, 8)));

display_interval(par2(pair(4, 6), pair(7, 8)));