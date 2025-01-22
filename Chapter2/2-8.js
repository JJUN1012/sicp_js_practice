function make_interval(x, y){ return pair(x, y);};

function upper_bound(interval){return head(interval);};
function lower_bound(interval){return tail(interval);};

function sub_interval(x, y){
    return make_interval(lower_bound(x) - upper_bound(y),
            upper_bound(x) - lower_bound);
};