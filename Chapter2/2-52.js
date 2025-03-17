import { heart, stack, turn_upside_down, beside, flip_vert, flip_horiz, show } from 'rune';

function identity(x){
    return x;
}

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

function square_of_four(tr, tl, br, bl){
    return painter => {
        const top = beside(tl(painter), tr(painter));
        const bottom = beside(bl(painter), br(painter));
        return below(bottom, top);
    };
}

function square_limit(painter, n) {
    const combine4 = square_of_four(flip_horiz, identity, 
                                    turn_upside_down, flip_vert);
    return combine4(corner_split(painter, n));
}

show(square_limit(heart, 4));
