function make_interval(x, y){ return pair(x, y);}

function lower_bound(interval){return head(interval);}
function upper_bound(interval){return tail(interval);}

function display_interval(interval){
    return "[" + stringify(lower_bound(interval)) + ", "
        + stringify(upper_bound(interval)) + "]";
}

function make_center_width(c, w) {
    return make_interval(c - w, c + w);
}

function make_center_percent(center_value, percent_value){
    const width = center_value * percent_value / 100;
    return make_center_width(center_value, width);
}

display_interval(make_center_percent(30, 10));