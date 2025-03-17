import { heart, stack, beside, show } from 'rune';

function split(func1, func2){
    function split_recursion(painter, n){
        if(n === 0){
            return painter; 
        }else{
            const smaller = split_recursion(painter, n - 1);
            return func1(painter, func2(smaller, smaller));
        }
    }
    return split_recursion;
}

function below(bottom, top){
    return stack(top, bottom);
}

const right_split = split(beside, below);
const up_split = split(below, beside);

function corner_split(painter, n){
    if(n === 0){
        return painter;
    }else{
        const up = up_split(painter, n - 1);
        const right = right_split(painter, n - 1);
        const corner = corner_split(painter, n - 1);
        return beside(below(painter, up), below(right, corner));
    }
}

show(corner_split(heart, 6));
