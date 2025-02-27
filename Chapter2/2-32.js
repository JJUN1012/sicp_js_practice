function subsets(s){
    if(is_null(s)){
        return list(null);
    }else{
        const rest = subsets(tail(s));//subsets except head(s)
        return append(rest, map(set => pair(head(s), set), rest));
    }
}

subsets(list(1, 2, 3));