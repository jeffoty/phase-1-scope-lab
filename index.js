var customerName = "bob";
const leastFavoriteCustomer = "bob"


function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}
//console.log(upperCaseCustomerName())

function setBestCustomer() {
    bestCustomer = "not bob";
}
//console.log(setBestCustomer())

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}
//console.log(overwriteBestCustomer())

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "sam";
    return leastFavoriteCustomer;
}
//console.log(changeLeastFavoriteCustomer())