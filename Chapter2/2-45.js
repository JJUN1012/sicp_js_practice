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

show(right_split(heart, 4));
