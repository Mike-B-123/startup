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

## Midterm Review:
### In the following code, what does the link element do?
- "<link href="main.css" rel="stylesheet" />" The link element allows authors to link their document to other resources. The destination of the link(s) is given by the href attribute, which must be present and must contain a valid non-empty URL potentially surrounded by spaces. A link element must have rel attribute.
  
**In the following code,  what does a div tag do?**
- The div tag in HTML is a container that is used to group other HTML elements together and apply styles to them as a unit
  
**In the following code, what is the difference between the #title and .grid selector?**
-  title bar on a selector can help identify the selector or provide instructions for using it. For example, a title bar can indicate which Grid/Graph or panel stack the selector targets
- A title bar on a Grid/Graph can help users identify an object on the document. It can also be used to minimize and maximize the Grid/Graph.

**In the following code, what is the difference between padding and margin?**
- a margin is the space around an element's border, while padding is the space between an element's border and the element's content.

it goes content -> padding -> Border -> Margin (From center to outer)

**Given this HTML and this CSS how will the images be displayed using flex?**
- flex can help with sizing on screen. And help with structure between body, foot, and header. Also helps with direction such as column or rows.
- We can create multiple rows in our website to seperate headers into different sections.

**What does the following padding CSS do?**
- create space around an element's content, inside of any defined borders
- Ex: padding: 25px 50px 75px 100px;
top padding is 25px
right padding is 50px
bottom padding is 75px
left padding is 100px
- Ex: padding: 25px 50px 75px;
top padding is 25px
right and left paddings are 50px
bottom padding is 75px
- EX: padding: 25px 50px;
top and bottom paddings are 25px
right and left paddings are 50px

**What does the following code using arrow syntax function declaration do?**
- An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
1. Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
2. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
3. Arrow functions cannot use yield within their body and cannot be created as generator functions.

**What does the following code using map with an array output?**
- The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
- we use arrow because it's convient, but a disadvantage is it's not a real function (look at scope module)??
Ex: const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

**What does the following code output using getElementByID and addEventListener?**
- In this example, we're getting the button element from the document using document.getElementById, and then calling addEventListener to add a 'click' event listener to the button.
- Event Listener: 
-   The second parameter is an anonymous function that will be executed when the 'click' event is detected on the button.
  Ex: const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  // code to run when button is clicked
});

**What does the following line of Javascript do using a # selector?**
- In JavaScript, selectors can be used to select elements in the DOM. A selector can be an element ID, class, or tag name such as document.querySelector('#my-id')
  Ex: . (Here is an example of using a selector in JavaScript to select an element with an ID of 'my-id'.)
  - const element = document.querySelector('#my-id')

**Which of the following are true? (mark all that are true about the DOM)**
- DOM:
**By default, the HTML span element has a default CSS display property value of:**
  -
**How would you use CSS to change all the div elements to have a background color of red?**
  - "<div class="example">"
   "<p>This is some CTA text.</p>"
  " <button>Click me</button>"
"</div>:"
- ".example {"
   "background-color: lightblue;"
"}"
**How would you display an image with a hyperlink in HTML?**
  - 
**In the CSS box model, what is the ordering of the box layers starting at the inside and working out?**
- 
**Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?**
-
**What will the following code output when executed using a for loop and console.log?**
**How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?**
- // Select the element with the id "byu"
var element = document.getElementById("byu");

// Change the text color to green
element.style.color = "green";
**What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?**
(opening) (closing tags)
- paragraph: <p>	</p>
- Ordered List: <ol> <li>American flamingo</li> <li>Greater flamingo</li>  </ol>
- unordered list: <ul>	<li>American flamingo</li> <li>Greater flamingo</li> </ul>
- first level heading: <h1>This is heading 1</h1>
- second level heading: <h2>This is heading 2</h2>
- thrid level heading: <h3>This is heading 3</h3>

**How do you declare the document type to be html?**
- All HTML documents must start with a document type declaration: <! DOCTYPE html> . The HTML document itself begins with <html> and ends with </html> . The visible part of the HTML document is between <body> and </body
**What is valid javascript syntax for if, else, for, while, switch statements?**
- if statement: if (hour < 18) {
  greeting = "Good day";
}
- else statement:
  if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
- else if statement:
- if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
-  for statement:
  for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
- while statement:
  int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
- switch statement: (The switch statement evaluates an expression and matches its value against a series of case clauses. If there is a match, the associated block of code is executed.)
  int day = 2;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Thursday");
    break;
}
// Outputs "Thursday" (day 2) 
**What is the correct syntax for creating a javascript object?** ??
- The Object. create() method in JavaScript creates a new object using an existing object as its prototype.
**Is it possible to add new properties to javascript objects?**
- Some of the ways to add property to object JavaScript include: using dot notation, using bracket [ ] notation, using defineProperty() method, using spread operator, and using Object. assign() method
**If you want to include JavaScript on an HTML page, which tag do you use?**
- You can add JavaScript code in an HTML document by employing the dedicated HTML tag <script> that wraps around JavaScript code
**Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?**
  - 
**Which of the following correctly describes JSON?**
- JSON (JavaScript Object Notation) is a text-based format for storing and exchanging data that's both human-readable and machine-parsable. It's commonly used in web applications and API call
**What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?**
  -**chmod**: You can use chmod to control who can read, edit, or run your files. For example, you might change permissions so that everyone on a system can access a file that was downloaded by one person.
  - pwd: The PWD command in Linux system administration stands for "Print Working Directory." It is used to display the absolute path of the current working directory in the command-line interface. This command is helpful for navigating the file system and referencing the current directory in various operations
  - cd: The cd command, also known as chdir (change directory), is a command-line shell command used to change the current working directory in various operating systems
  - ls: The ls command is used to list files. "ls" on its own lists all files in the current directory except for hidden files.
  - vim (?? how would I use this differently fro nano?): The vim command is used to edit text files within the command line interface (CLI). It's a powerful, customizable text editor that's often used by developers
  - nano: The nano command is a terminal-based text editor that allows users to create, edit, and save text files directly from the command line of Unix-based systems
  - mkdir: The mkdir command in Linux/Unix is a command-line utility that allows users to create new directories. mkdir stands for "make directory." With mkdir , you can also set permissions, create multiple directories at once, and much more
  - mv: The mv command moves files and directories from one directory to another or renames a file or directory. If you move a file or directory to a new directory, it retains the base file name. When you move a file, all links to other files remain intact, except when you move it to a different file system.
  - rm: (rm myfile) The rm command removes the entries for a specified file, group of files, or certain select files from a list within a directory. User confirmation, read permission, and write permission are not required before a file is removed when you use the rm command. However, you must have write permission for the directory containing the file.
  - man: (man [ [ [ -c ] [ -t ] [ section ] ] | [ -k | -f ] ] [ -F ] [ -m ] [ -Mpath ] [ -r ] [ -a ] title)
        -   The man command provides reference information on topics, such as commands, subroutines, and files. The man command provides one-line descriptions of commands specified by name. The man command also provides information on all commands whose descriptions contain a set of user-specified keywords
  - ssh: (ssh [username]@[hostname_or_IP]) The SSH command sets up a secure encrypted connection between a user's device and a remote machine, often a server.
  - ps: The ps command enables you to check the status of active processes on a system, as well as display technical information about the processes. This data is useful for administrative tasks such as determining how to set process priorities.
  - wget: is a free GNU command-line utility tool used to download files. It retrieves files using HTTP, HTTPS, and FTP protocols and is useful for downloads in unstable networks
  - sudo: The utility provides an efficient way to temporarily grant users or user groups privileged access to system resources so that they can run commands that they cannot run under their regular accounts
  - do:?? The DO command in PL/I allows you to group one or more commands together and execute them repeatedly. The DO and END keywords delimit a group of commands, which is called a DO group
**Which of the following console command creates a remote shell session?**
-To create a remote shell session in your terminal, use the "ssh" command followed by the username, "@" symbol, and the server address
**Which of the following is true when the -la parameter is specified for the ls console command?**
- Using ls -la gives a detailed, comprehensive list of all files, including hidden ones, with additional information like permissions, owner, size, and modification date.
### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- **Top-Level Domain (TLD)**: The last part of a domain name, like ".com", ".net", or ".org". 
- **Subdomain**: A section within a domain, usually used to organize different parts of a website, like "blog.example.com" where "blog" is the subdomain. 
- **Root Domain**: The main domain name combined with the top-level domain, like "example.com"
### Is a web certificate is necessary to use HTTPS.
- Yes, a web certificate (also known as an SSL certificate) is absolutely necessary to use HTTPS; without it, you cannot enable the secure "HTTPS" protocol on your website, as the certificate is what allows for encryption of data transmitted between the website and the user, making it essential for secure communication online.
### Can a DNS A record can point to an IP address or another A record.
- A DNS A record can only point to an IP address; it cannot point to another A record. The purpose of an A record is to map a domain name directly to an IP address, so its value is always an IP address
### Port 443, 80, 22 is reserved for which protocol?**
-HTTP (80), HTTPS (443), FTP (21), SSH (22), and SMTP (25)
### What will the following code using Promises output when executed?
- A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It is used for handling asynchronous operations, such as making API calls or reading files, in a more organized and readable way.
- const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
