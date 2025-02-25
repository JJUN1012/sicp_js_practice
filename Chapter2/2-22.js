function for_each(func, items){
    if(!is_null(items)){
        func(head(items));
        return for_each(func, tail(items));
    }else{
        return undefined;
    }
}

for_each(x => display(x), list(57, 321, 88));