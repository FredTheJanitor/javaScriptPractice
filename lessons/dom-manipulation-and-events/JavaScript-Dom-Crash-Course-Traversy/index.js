// Examine document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Lister";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// bad way to select stuff because if anything gets
// added or subtracted index changes
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Selectors 

// Get Element by ID
// console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);