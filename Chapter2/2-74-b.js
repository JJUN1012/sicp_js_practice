function make_record(type, contents){
    return pair(type, contents);
}
function record_type(record){
    return head(record);
}
function record_contents(record){
    return tail(record);
}
function get_salary(record){
    const the_record_type = record_type(record);
    const the_salary = get("get_salary", the_record_type)(record_contents(record));
    return !is_undefined(the_salary)
           ? the_salary
           : undefined;
}
/**
 * 각 division 파일에는 division의 reord form에 따른 salary를 구하는 function이 있어야 하고,
 * 이가 put("get_salary", division_name(division_files), get_salary); 와 같이 되어
 * division form에 따라 salary를 구할 수 있게 된다. 
 * record 파일에는 record_type으로 division_name을 활용해서
 * get_salary를 사용할 때, 어떤 division form인지 reference할 수 있다.
**/
