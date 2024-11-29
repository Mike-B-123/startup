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
-  "<" link href="main.css" rel="stylesheet" /> The link element allows authors to link their document to other resources. The destination of the link(s) is given by the href attribute, which must be present and must contain a valid non-empty URL potentially surrounded by spaces. A link element must have rel attribute. (the rel attribute
  
### In the following code,  what does a div tag do?
- The div tag in HTML is a container that is used to group other HTML elements together and apply styles to them as a unit
  
### In the following code, what is the difference between the #title and .grid selector? 
- "#" is for the ID. which specifies specific objects, and used only for selecting one element.
- "." is for the class. used for selecting multiple objects.

## In the following code, what is the difference between padding and margin?
- a margin is the space around an element's border, while padding is the space between an element's border and the element's content.

it goes content -> padding -> Border -> Margin (From center to outer)

### Given this HTML and this CSS how will the images be displayed using flex?
- flex can help with sizing on screen. And help with structure between body, foot, and header. Also helps with direction such as column or rows.
- We can create multiple rows in our website to seperate headers into different sections.

### What does the following padding CSS do?
- create space around an element's content, inside of any defined borders
- **Ex: padding: 25px 50px 75px 100px;** (can do the same with margin and border, but border has slightly different syntax)
top padding is 25px
right padding is 50px
bottom padding is 75px
left padding is 100px
- **Ex: padding: 25px 50px 75px;**
top padding is 25px
right and left paddings are 50px
bottom padding is 75px
- **EX: padding: 25px 50px;**
top and bottom paddings are 25px
right and left paddings are 50px

### What does the following code using arrow syntax function declaration do?
- An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
1. Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
2. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
3. Arrow functions cannot use yield within their body and cannot be created as generator functions.

## What does the following code using map with an array output?
- The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
- we use arrow because it's convient, but a disadvantage is it's not a real function (look at scope module)??
Ex: const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

## What does the following code output using getElementByID and addEventListener?
- In this example, we're getting the button element from the document using document.getElementById, and then calling addEventListener to add a 'click' event listener to the button.
- Event Listener: 
-   The second parameter is an anonymous function that will be executed when the 'click' event is detected on the button.
  Ex: const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  // code to run when button is clicked
});

## What does the following line of Javascript do using a # selector?
- In JavaScript, selectors can be used to select elements in the DOM. A selector can be an element ID, class, or tag name such as document.querySelector('#my-id')
  Ex: . (Here is an example of using a selector in JavaScript to select an element with an ID of 'my-id'.)
  - const element = document.querySelector('#my-id')

## Which of the following are true? (mark all that are true about the DOM)
- DOM: Document object model. Represents the contents of a file in a tree structure.
- We can use DOM to interact with an HTML with pages: add content, delete content, change content.
- - In an DOM every HTML element in the document becomes an object.
## By default, the HTML span element has a default CSS display property value of:
  - The HTML <span> element has a default CSS display property value of inline
  - inline means that the element does not start on a new line and only takes up as much width as necessary.
  - Inline elements like <span> can exist alongside other elements on the same line, and their dimensions (width and height) cannot be modified directly with CSS (although padding, margins, and borders can affect spacing).
## How would you use CSS to change all the div elements to have a background color of red?
  - "<div class="example">"
   "<p>This is some CTA text.</p>"
  " <button>Click me</button>"
"</div>:"
- ".example {"
   "background-color: lightblue;"
"}"
### How would you display an image with a hyperlink in HTML? (using a hyperlink to get an image)
  - // ex: <img src="https://www.educative.io/static/imgs/logos/logoMarkv2.png">
### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?   
- (see further explain on padding question:)
- Content: This is the innermost area, where text, images, or other elements are placed.
Padding: The space between the content and the border. Padding is inside the border and increases the size of the box without affecting the content.
Border: A line surrounding the padding (if any) and content. You can control the width, style, and color of the border.
Margin: The outermost layer, which creates space between the border of the element and the neighboring elements. Margins are outside the border and do not affect the size of the element itself.
### Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
- <span class="highlight">trouble</span>
<span>double</span>
- You can also use an nth-type selector
- Ex: span:nth-of-type(1) {
    color: green;
}
### What will the following code output when executed using a for loop and console.log?
- Outputs Information: It prints the argument(s) passed to it (e.g., strings, numbers, objects, arrays) to the console.
Useful for Debugging: Developers use it to track the value of variables, test conditions, or log errors while running JavaScript code.
Accessible in Developer Tools: You can see the output by opening the browser’s developer tools (usually by pressing F12 or right-clicking and selecting "Inspect" and navigating to the "Console" tab).
- You can pass in multiple arguements and it will print them in order
- Example with for loop:
- for (let i = 0; i < 5; i++) {
    console.log("The value of i is:", i);
}
- Output:
- The value of i is: 0
- The value of i is: 1
- The value of i is: 2 etc
## How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
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

### How do you declare the document type to be html?
- All HTML documents must start with a document type declaration: <! DOCTYPE html> . The HTML document itself begins with <html> and ends with </html> . The visible part of the HTML document is between <body> and </body
  
### What is valid javascript syntax for if, else, for, while, switch statements?
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
### What is the correct syntax for creating a javascript object? 
- The Object. create() method in JavaScript creates a new object using an existing object as its prototype. You can also just use a simple as: (use constant for default things so it doesn't change down stream)
  Ex: constant person {name: mick,
  age: 20,
  height:6'0 }                                                                                                
**Is it possible to add new properties to javascript objects?**
- Some of the ways to add property to object JavaScript include: using dot notation, using bracket [ ] notation, using defineProperty() method, using spread operator, and using Object. assign() method
Ex: (dot notation)
const person = {
  name: 'Alice',
  age: 30
};

// Adding a new property
person.city = 'New York';

console.log(person);
// Output: { name: 'Alice', age: 30, city: 'New York' }
Ex: (Bracket Notation)

EX 2:
const car = {
  make: 'Toyota',
  model: 'Camry'
};

// Adding a new property using a variable
const propertyName = 'year';
car[propertyName] = 2021;

console.log(car);
// Output: { make: 'Toyota', model: 'Camry', year: 2021 }

### If you want to include JavaScript on an HTML page, which tag do you use?
- You can add JavaScript code in an HTML document by employing the dedicated HTML tag <script> that wraps around JavaScript code
**Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?**
  - (see selector functions at the bottom of notes.md)
  - Here's an exmple using ID selecting:
"<" p id="animal">animal</p>
"<"p id="fish">fish</p>

document.getElementById('animal').innerText = 'crow';

### Which of the following correctly describes JSON?
- **JSON** (JavaScript Object Notation) is a text-based format for storing and exchanging data that's both human-readable and machine-parsable. It's commonly used in web applications and API call. You can put data in it that you then can use in your main code like in HTML, java script, ect. It's just a nice format that is similar to java script to store numbers, arrays, strings, ects. for later use.
- 
### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
  -**chmod**: You can use chmod to control who can read, edit, or run your files. For example, you might change permissions so that everyone on a system can access a file that was downloaded by one person.
  - pwd: The PWD command in Linux system administration stands for "Print Working Directory." It is used to display the absolute path of the current working directory in the command-line interface. This command is helpful for navigating the file system and referencing the current directory in various operations
  - cd: The cd command, also known as chdir (change directory), is a command-line shell command used to change the current working directory in various operating systems
  - ls: The ls command is used to list files. "ls" on its own lists all files in the current directory except for hidden files.
  - vim : The vim command is used to edit text files within the command line interface (CLI). It's a powerful, customizable text editor that's often used by developers
  - nano: The nano command is a terminal-based text editor that allows users to create, edit, and save text files directly from the command line of Unix-based systems
    [When to use VIM vs NANO: both are different editing engines, but can use either based off of prefernce. Both are basically the same.] 
  - mkdir: The mkdir command in Linux/Unix is a command-line utility that allows users to create new directories. mkdir stands for "make directory." With mkdir , you can also set permissions, create multiple directories at once, and much more
  - mv: The mv command moves files and directories from one directory to another or renames a file or directory. If you move a file or directory to a new directory, it retains the base file name. When you move a file, all links to other files remain intact, except when you move it to a different file system.
  - rm: (rm myfile) The rm command removes the entries for a specified file, group of files, or certain select files from a list within a directory. User confirmation, read permission, and write permission are not required before a file is removed when you use the rm command. However, you must have write permission for the directory containing the file.
  - man: (man [ [ [ -c ] [ -t ] [ section ] ] | [ -k | -f ] ] [ -F ] [ -m ] [ -Mpath ] [ -r ] [ -a ] title)
        -   The man command provides reference information on topics, such as commands, subroutines, and files. The man command provides one-line descriptions of commands specified by name. The man command also provides information on all commands whose descriptions contain a set of user-specified keywords
  - **ssh:** (ssh [username]@[hostname_or_IP]) The SSH command sets up a secure encrypted connection between a user's device and a remote machine, often a server.
  - **ps:** The ps command enables you to check the status of active processes on a system, as well as display technical information about the processes. This data is useful for administrative tasks such as determining how to set process priorities.
  - **wget:** is a free GNU command-line utility tool used to download files. It retrieves files using HTTP, HTTPS, and FTP protocols and is useful for downloads in unstable networks
  - **sudo:** The utility provides an efficient way to temporarily grant users or user groups privileged access to system resources so that they can run commands that they cannot run under their regular accounts
  - **do:** The DO command in PL/I allows you to group one or more commands together and execute them repeatedly. The DO and END keywords delimit a group of commands, which is called a DO group. Almost used as a loop over elements
### Which of the following console command creates a remote shell session?
-To create a remote shell session in your terminal, use the "ssh" command followed by the username, "@" symbol, and the server address (ssh username@remote_host)
- **You can also use:**
- Telnet: Use telnet remote_host (less secure).
- RDP: Use mstsc for a remote desktop connection on Windows.
- PowerShell Remoting: Use Enter-PSSession for remote sessions on Windows via PowerShell
### Which of the following is true when the -la parameter is specified for the ls console command?
- Using ls -la gives a detailed, comprehensive list of all files, including hidden ones, with additional information like permissions, owner, size, and modification date.
### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- **Top-Level Domain (TLD)**: The last part of a domain name, like ".com", ".net", or ".org". [.click]
- **Subdomain**: A section within a domain, usually used to organize different parts of a website, like "blog.example.com" where "blog" is the subdomain. [bannana.fruit.bozo.click]
- **Root Domain**: The main domain name combined with the top-level domain, like "example.com" [bozo.click]
### Is a web certificate is necessary to use HTTPS.
- Yes, a web certificate (also known as an SSL certificate) is absolutely necessary to use HTTPS; without it, you cannot enable the secure "HTTPS" protocol on your website, as the certificate is what allows for encryption of data transmitted between the website and the user, making it essential for secure communication online.
### Can a DNS A record can point to an IP address or another A record.
- A DNS A record can only point to an IP address; it cannot point to another A record. The purpose of an A record is to map a domain name directly to an IP address, so its value is always an IP address
### Port 443, 80, 22 is reserved for which protocol?
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

### JAVA Script Selectors:
**Tag selector:** Select elements by tag name (e.g., div, p, etc.).
**Class selector:** Select elements by class name using a . prefix.
**ID selector:** Select elements by ID using a # prefix. [example: const introElement = document.querySelector('#intro');]
**Attribute selector:** Select elements by specific attributes (e.g., data-*, href, etc.).
**Descendant selector:** Select elements nested within a specific parent.
**Nth-child selector:** Select elements based on their order in the document.
**Sibling selector:** Select elements next to others.

## DOM
### Why is the DOM Important?
**Interactivity:** The DOM allows web pages to be interactive. Without the DOM, JavaScript wouldn't be able to interact with the HTML, making dynamic web applications impossible.

**Dynamic Content:** It makes it possible to create dynamic content that changes in response to user actions or other data sources (e.g., loading new data into a webpage without refreshing).

**Separation of Concerns:** The DOM helps to separate the structure of the web page (HTML) from the behavior (JavaScript) and presentation (CSS), leading to cleaner and more maintainable code.

**Summary:**
The DOM is essential for manipulating web pages, handling user interactions, dynamically updating content, and making web applications interactive. It provides a structured representation of a document and a way for programming languages, especially JavaScript, to access and modify it in real-time.

Example HTML:
<!DOCTYPE html>
<html lang="en">
  <head class ="bg-dark text-light">
    <meta charset="UTF-8" />
    <!-- Tell browsers not to scale the viewport automatically -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Bucket List</title>
    <link rel="stylesheet" href="main.css" />

    <!-- Include bootstrap CSS framework -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-dark text-light">
    <!-- Use header, main, and footer elements to give semantic structure -->
    <header class="container-fluid">
      <!-- Navigation elements -->
      <nav class="navbar top navbar-dark">
        <!-- Menu is a semantic alternative to <ul> that represents an interaction -->
        <menu class="navbar-nav menu">
          <a class="navbar-brand" > The Bucket List </a>
          <li class="nav-item" ><a class="nav-link active"  href="index.html">Home</a></li>
          <li class="nav-item" ><a class="nav-link" href="Destinations.html">Destinations</a></li>
          <li class="nav-item"><a  class="nav-link" href="My_list.html">My List</a></li>
          <li class="nav-item"><a  class="nav-link" href="recommended.html">Recommended</a></li>
        </menu>
      </nav>

      <!-- Since we don't have the ability to style we use old style HTML to give some visual formatting -->
    </header>

    <main class="container-fluid bg-secondary text-center main">
      <div>
      <h1> Welcome to Adventure!</h1>
      <form method="get" action="Destinations.html"></form>
          <div class="input-group mb-3">
            <span class="input-group-text">@</span>
            <input class="form-control" placeholder="your@email.com" />
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">🔒</span>
            <input class="form-control" placeholder="password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
      </div>
    </main>

    <footer class= "footer container-fluid">
      <span class="text-reset">Mick Buck</span>
      <a href="https://github.com/Mike-B-123/startup">GitHub</a>
    </footer>
  </body>
</html>








Example: CSS
* {
  font-family: fantasy;
}
body {
    display: flex;
    flex-direction: column;
    min-width: 375px;
    margin: 0;
    height: 100%;
  }
  
  header {
    background-color: #7E8C54;
    color: white;
    flex: 0 80px;
  }
  main {
    flex: 1 ;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: calc(92vh - 100px);
  }
  section {
    flex: 1 ;   
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: space-around;
  }
  
  footer {
    background-color: #7E8C54;
    color: white;
    overflow: hidden;
    flex: 0 80px;
  }
  
  menu {
    flex: 1;
    display: flex;
    /*  overwrite Bootstrap so the menu does not wrap */
    flex-direction: row !important;
    list-style: none;
  }
  
  .navbar-brand {
    padding-left: 0.3em;
    border-bottom: solid rgb(182, 182, 182) thin;
  }
  
  menu .nav-item {
    padding: 0 0.3em;
  }
  
  footer a {
    float: right;
  }

  image{
  max-width: 500px;
  height: 100px;
  }

  @media(min-width: 1200px) {
    image{
        width: 50%;
    }
  }
  @media(min-width: 768px) {
    image{
        width: 70%;
    }
  }
  
  @media (max-height: 600px) {
    header {
      display: none;
    }
    footer {
      display: none;
    }
    main {
      flex: 1 100vh;
    }
  }



Example Java:
function pickupPizza() {
  const order = Createorder();

  // Promise
  Orderfirst(order)
    .then((order) => Placeorder(order))
    .then((order) => Serveorder(order))
    .catch((order) => {
      Droppedpizza(order);
    });
}

function Createorder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] 👨🏻‍🍳 <i>Making Pizza Now!</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function Orderfirst(order) {
  return new Promise((resolve, reject) => {
    Dowork(order, 1000, 3000, resolve, reject, `Cashier out now!`);
  });
}
function Placeorder(order) {
  return new Promise((resolve, reject) => {
    Makepizza(order, 1000, 3000, resolve, reject, `We ran out of tomatos!`);
  });
}

function Dowork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function Serveorder(order) {
  order.element.innerHTML = `<span>[${order.id}] 🍕 <b>Served</b>!</span>`;
}

function Orderfailure(order) {
  order.element.innerHTML = `<span> [${order.id}] 😠 <b class='failure'>Failure</b>! ${order.error}</span>`;
}

function Makepizza(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.8) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function Addingingredients(order) {
  order.element.innerHTML = `<span>[${order.id}] 🍅<b>Adding ingredients</b>!</span>`;
}

function Droppedpizza(order) {
  order.element.innerHTML = `<span> [${order.id}] 🥲 <b class='failure'>Whoops!</b>! ${order.error}</span>`;
}

# React
- React components are regular JavaScript functions, but their names **must** start with a capital letter or they won’t work!

