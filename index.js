
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }
  function destructivelyDeleteFromEmployeeByKey(obj, name,) {
    delete employee[name];
    return obj;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
  };
function deleteFromEmployeeByKey(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

  const employee = {
    name: "Courtney",
    city: "Scottsdale",
};
const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee = {
        name: "Sam",
        streetAddress: "12 Broadway",
    }
  );

