function find_employee_record(name, division_list){
  if(is_null(division_list)){
      return undefined;
  }
  const the_division = head(division_list);
  const the_record = get_record(name, the_division);
  return !is_undefined(the_record)
    ? the_record
    : find_employee_record(name, tail(division_list));
}
