function make_interval(x, y){ return pair(x, y);}

function lower_bound(interval){return head(interval);}
function upper_bound(interval){return tail(interval);}

function display_interval(interval){
    display("[" + stringify(lower_bound(interval)) + ", "
        + stringify(upper_bound(interval)) + "]");
}

function make_center_width(c, w) {
    return make_interval(c - w, c + w);
}
function center(i) {
    return (lower_bound(i) + upper_bound(i)) / 2;
}
function width(i) {
    return (upper_bound(i) - lower_bound(i)) / 2;
}

function make_center_percent(center_value, percent_value){
    const width = center_value * percent_value / 100;
    return make_center_width(center_value, width);
}

function percent(x){
    return width(x) / center(x) * 100;
}

display_interval(make_center_percent(30, 10));
percent(make_interval(27,33));