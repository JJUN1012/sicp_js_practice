function make_interval(x, y){ return pair(x, y);}

function lower_bound(interval){return head(interval);}
function upper_bound(interval){return tail(interval);}

function mul_interval(x, y) {
    return lower_bound(x) >= 0
         ? lower_bound(y) >= 0
         ? make_interval(lower_bound(x) * lower_bound(y), upper_bound(x) * upper_bound(y))
         : upper_bound(y) < 0
         ? make_interval(upper_bound(x) * lower_bound(y), lower_bound(x) * upper_bound(y))
         : make_interval(upper_bound(x) * lower_bound(y), upper_bound(x) * upper_bound(y))
         : lower_bound(x) < 0 && upper_bound(x) >= 0
         ? lower_bound(y) >= 0
         ? make_interval(lower_bound(x) * upper_bound(y), upper_bound(x) * upper_bound(y))
         : upper_bound(y) < 0
         ? make_interval(upper_bound(x) * lower_bound(y), lower_bound(x) * lower_bound(y))
         : make_interval_with_2minusplus(x, y)
         : lower_bound(y) >= 0
         ? make_interval(lower_bound(x) * upper_bound(y), upper_bound(x) * lower_bound(y))
         : upper_bound(y) < 0
         ? make_interval(upper_bound(x) * upper_bound(y), lower_bound(x) * lower_bound(y))
         : make_interval(lower_bound(x) * upper_bound(y), lower_bound(x) * lower_bound(y));
}

function make_interval_with_2minusplus(x, y){
    const p1 = lower_bound(x) * lower_bound(y);
    const p2 = lower_bound(x) * upper_bound(y);
    const p3 = upper_bound(x) * lower_bound(y);
    const p4 = upper_bound(x) * upper_bound(y);
    return make_interval(math_min(p1, p2, p3, p4),
                         math_max(p1, p2, p3, p4));

}

function display_interval(interval){
    return "[" + stringify(lower_bound(interval)) + ", "
        + stringify(upper_bound(interval)) + "]";
}

display_interval(mul_interval(make_interval(3, 5), make_interval(-3, 4)));