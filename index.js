// Add your code here
const usersURL = `http://localhost:3000/users`
// In`submitData`, write a valid POST request to`http://localhost:3000/users`
// using`fetch()`.This request should include:

// - The destination URL
//     - Headers for 'Content-Type' and 'Accept', both set to 'application/json'
//         - A body with the name and email passed in as arguments to`submitData`.These
//   should be assigned to `name` and `email` keys within an object.This object
//   should then be stringified.


// Use a `then()` call to access the `Response` object and use its built-in
// `json()` method to parse the contents of the `body` property. Use a _second_
// `then()` to access this newly converted object. From this object, find the new
// id and append this value to the DOM.
// Use a `then()` call to access the `Response` object and use its built-in
// `json()` method to parse the contents of the `body` property. Use a _second_
// `then()` to access this newly converted object. From this object, find the new
// id and append this value to the DOM.

function submitData(name, email){
    return fetch(usersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name: name, email: email}),
    })
    .then(string => string.json())
    .then(data => document.body.append(data.id))
    .catch(error => document.body.append(error))
}

submitData()

