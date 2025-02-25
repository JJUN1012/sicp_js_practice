function cc(amount, coin_values) {
    return amount === 0
           ? 1
           : amount < 0 || no_more(coin_values)
           ? 0
           : cc(amount, except_first_denomination(coin_values)) +
             cc(amount - first_denomination(coin_values), coin_values);
}

const us_coins = list(50, 25, 10, 5, 1);
const uk_coins = list(100, 50, 20, 10, 5, 2, 1);

function except_first_denomination(coin_values){
    return tail(coin_values);
}
function first_denomination(coin_values){
    return head(coin_values);
}
function no_more(coin_values){
    return is_null(coin_values);
}

cc(100, us_coins);