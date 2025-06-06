function make_interval(x, y){ return pair(x, y);}

function lower_bound(interval){return head(interval);}
function upper_bound(interval){return tail(interval);}

function mul_interval(x, y) {
    const p1 = lower_bound(x) * lower_bound(y);
    const p2 = lower_bound(x) * upper_bound(y);
    const p3 = upper_bound(x) * lower_bound(y);
    const p4 = upper_bound(x) * upper_bound(y);
    return make_interval(math_min(p1, p2, p3, p4),
                         math_max(p1, p2, p3, p4));
}

function div_interval(x, y){
    return upper_bound(y) >= 0 && lower_bound(y) <= 0
        ? error("dividing interval makes error")
        : mul_interval(x, make_interval(1/upper_bound(y),
                                        1/lower_bound(y)));
}

function display_interval(interval){
    return "[" + stringify(lower_bound(interval)) + ", "
        + stringify(upper_bound(interval)) + "]";
}

display_interval(div_interval(make_interval(10, 34), make_interval(2, 8)));