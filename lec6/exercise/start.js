const https = require("https");

const apiUrl = "https://api.rapidmock.com/mocks/89mEw";
const fApiUrl = "https://api.rapidmock.com/errors/400?message=Error%20Message";

const options = {
  headers: {
    "x-rapidmock-delay": 2500,
  },
};

/* IGNORE ABOVE */

// Part 1 - Successful API Response

/*
Your code should resolve the promise with the parsed JSON object if the request is successful.
We'll worry about error handling in the next part.
Make a new Promise object that performs the HTTP request and resolves the request with the parsed JSON object once it is complete. 
Log the result in console (you should not see an undefined value in your console).

Here is the code snippet that should initially go within your promise. 
Right now it just logs the result of the request once it is complete using callbacks.
Modify it while keeping the original functionality so it uses Promises instead (feel free to wrap this snippet directly):
*/

https.get(apiUrl, options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    data = JSON.parse(data);
    console.log(data);
  });
});

// Part 2 - Error Handling (hint: use the statusCode property in the callback function of https.get() to check if the status resulted in an error)

/*
Your code should resolve the promise with the parsed JSON object if the request is successful
  and an error message if the request is rejected.
Successful requests have a status code of 200
Erroneous requests have a status code of 400
For this part you can assume the API will only return status codes of 200 or 400.

Here is the code snippet that should initially go within your promise.
Right now it just logs the result of the request once it is complete using callbacks.
Modify it so it uses Promises instead (feel free to wrap this snippet directly).

Ideally, we'd like to log the parsed JSON object or the error message depending on whether the request was fulfilled or rejected.

** NOTE ** The following snippet only differs from the snippet in Part 1 by the url (apiUrl vs fApiUrl).
           If you want, you can copy and paste your code from above, but make sure to change the URL.
*/

https.get(fApiUrl, options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    data = JSON.parse(data);
    console.log(data);
  });
});
