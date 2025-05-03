function type_tag(datum){
    return is_number(datum)
        ? "javascript_number"
        : is_pair(datum)
        ? head(datum)
        : error(datum, "can't find tag -- type_tag");
}

function contents(datum){
    return is_number(datum)
        ? datum
        : is_number(datum)
        ? tail(datum)
        : error(datum, "datum is not a pair -- contents");
}

function attach_tag(type_tag, contents){
    return is_number(contents)
        ? contents
        : pair(type_tag, contents);
}
