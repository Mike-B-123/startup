Can use these contents for midterm and final exam!

I learned from this assignment how to set up Github and how to commit and push between Github and my laptop!
make sure to cd into the right directory first!
To save to git hub on terminal: git add .
then: git commit -m "commit message here"
finally: git push

To Deploy when the deploy file is not in the same file as the pem key do the following:
** One problem I run into is getting into the grandparent file to acess my pem Key**
** To fix this put ../../key.pem which tells it, that it is two folders above**
1. use this command in the terminal "./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup" (or simon instead of startup)
2. Also make sure to use the Go live extenstion to text your code as you go instead of using just code pen (after every go live you will need to close the 500 port)

Midterm Review:
- In the following code, what does the link element do?
- 
In the following code,  what does a div tag do?
- The div tag in HTML is a container that is used to group other HTML elements together and apply styles to them as a unit
  
#In the following code, what is the difference between the #title and .grid selector?
-  title bar on a selector can help identify the selector or provide instructions for using it. For example, a title bar can indicate which Grid/Graph or panel stack the selector targets
- A title bar on a Grid/Graph can help users identify an object on the document. It can also be used to minimize and maximize the Grid/Graph.
#In the following code, what is the difference between padding and margin?
- a margin is the space around an element's border, while padding is the space between an element's border and the element's content.

it goes content -> padding -> Border -> Margin (FRom center to outer)

Given this HTML and this CSS how will the images be displayed using flex?
What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?
- An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
1. Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
2. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
3. Arrow functions cannot use yield within their body and cannot be created as generator functions.

What does the following code using map with an array output?
- The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
Ex: const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

What does the following code output using getElementByID and addEventListener?
- In this example, we're getting the button element from the document using document.getElementById, and then calling addEventListener to add a 'click' event listener to the button. The second parameter is an anonymous function that will be executed when the 'click' event is detected on the button.
  Ex: const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  // code to run when button is clicked
});

What does the following line of Javascript do using a # selector?
- In JavaScript, selectors can be used to select elements in the DOM. A selector can be an element ID, class, or tag name such as document.querySelector('#my-id')
  Ex: . (Here is an example of using a selector in JavaScript to select an element with an ID of 'my-id'.)
  - const element = document.querySelector('#my-id')

Which of the following are true? (mark all that are true about the DOM)

By default, the HTML span element has a default CSS display property value of: 
How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS.
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?
What will the following code using Promises output when executed?
