// Write your solution in this file!
const employee = {
    name: "Ahmed",
    streetAddress: "10010 ny"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, "name": "Sam", "streetAddress": "11 Broadway" };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["streetAddress"] = "12 Broadway";
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}