function is_equal_to_zero(x){
    return apply_generic("is_equal_to_zero", list(x));
}

function install_javascript_number_package(){
    //...
    put("is_equal_to_zero", list("javascript_number"), x => x === 0);
    //...
}

function install_rational_package(){
    //...
    put("is_equal_to_zero", list("rational"), x => numer(x) === 0);
    //...
}

function install_complex_package(){
    //...
    function is_equal_to_zero(x){
        return real_part(x) === 0 && imag_part(x) === 0;
    }
    put("is_equal_to_zero", list("complex"), is_equal_to_zero);
    //...
}
