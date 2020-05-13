# This is STEFANs Branch

## Final-Project

DCI Hamburg Final Project FBW4 Language Learning

### Structuring Standards

"There are many different views on the ideal order of imported modules. I recommend you just look around and find the one which works for you.
When it comes to me, I usually group imports by type && sort them alphabetically (that’s optional). I also tend to keep the following order:

1. Standard modules
2. Third-party modules
3. Your code imports (components, etc.)
4. Imports specific to the module (e.g. CSS, PNG, etc.)
5. Code only used for tests
   "

### Fetch Syntax && Error handling

function handleErrors(response) {
if (!response.ok) {
throw Error(response.statusText);
}
return response;
}
fetch("http://httpstat.us/500")
.then(handleErrors)
.then(response => console.log("ok") )
.catch(error => console.log(error) );
