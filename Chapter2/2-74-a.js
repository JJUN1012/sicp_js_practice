function make_division_files(name, files){
    return pair(name, files);
}
function division_name(division){
    return head(division);
}
function division_contents(division){
    return tail(division);
}

function get_record(name, division_files){
    const the_division = division_name(division_files);
    const employee_record = get("get_record", the_division)(name, division_contents(division_files));
    return !is_undefined(employee_record)
           ? employee_record
           : undefined;
}
/**
 * 각 division의 구조에는 name과 division_contents로 record를 돌려주는 함수와(ex: find_record)
 * put("get_record", division name, find_record);가 있어야 한다.
**/
