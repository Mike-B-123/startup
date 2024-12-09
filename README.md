# startup
## Elevator Pitch: 
We seek to travel not to be tourists, but to be *adventurers*! Sadly, whenever you look for things to do when traveling all that pops up are the same old touristy instagramy experiences: go eat a croissant in France, see a Broadway play in New York, etc. These may be fun and exciting things, but the sense of adventure is lost in the swarms of people doing the same activities. That’s why I want to create a website where people can find bucket list worthy experiences and truly have an adventure on their next trip! All that you have to do is click on your destination and you can find different people’s posts about exciting activities to try off the beaten path: paragliding in France, underwater scooters in Croatia, or truffle hunting in Switzerland. Truly bucket list worthy adventure is just a click away!!

## Key Features:
  -	Ability to display recommended destinations based on previous site visits
  -	Secure Login
  -	Ability to post text entries to website
  -	Clickable menu for easy site navigation
  -	Ability to see other user’s text posts and main site posts
  -	Ability to save website content to user’s account for easy future access
  -	Ability for admin to create and delete user entries
    
## Technologies:

- **HTML**: Four navigable HTML pages. One for login, one home page, one "Destinations" page, and one “My List” page. Hyperlinks to specific pages. This will provide the overall structure for the application.
- **CSS**: Will use for styling purposes making sure the website is more accessible, has color contrast, fits different screen sizes, etc. In addition, will help me define where elements are on application.
- **React**: React will help with login credentials and seeing other user’s “experience” posts. Will be used for the overall functionality of the application: navigating different pages of the site, submitting posts, and saving posts.
- **Service**: Backend service will process client requests and send to database including:
  - Login
  - Saving destinations
  - Fetching Data (such as posts) from database
  - Authentication for login
  - Submitting posts to database
- **DB/Login**: This will store user data, post data, and destination data. In addition, it will allow users to login.
- **WebSocke**t: When a user posts their written "experience" text that post is then made available for each other user to see. Creates a peer-to-peer relationship between client posts. Allows multiple user to receive live updates from other posts.

![Startup](https://github.com/user-attachments/assets/f757198a-728f-4376-9112-992709c54a9d)

## HTML Deliverable:

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - I created 6 HTML pages that represent the ability to login, naviagate to "My List" page to save destinations, "Destinations" page to see all countries with clickable links, "Recommendation" page with recommended countries and clickable links, and two actual country pages that allow you to post and see posts from other users about the country.
- **Third Party Services** - I put a place holder on each country page where I will add a third party service that generates adventure quotes and travel recommendations, so there is always fresh content on the page.
- **Links** - The login page links to Destinations, My List, and Recommendations. All other pages link to Main Menu (login page), Destinations, and Recommendations pages.
- **Text** - Each page has a textual description of what the page does.
- **HTML Tags** I used HTML tags including BODY, NAV, MAIN, HEADER, FOOTER on nearly every page.
- **Images** - Almost every page has an image of a destination, user icon, and the mascot Atlas (a dog image).
- **DB/Login** - Input box and submit button for login. The user icon represent data pulled from the database, since it pulls the client's user name and displays it.
- **WebSocket** - On each destination page there is a text box where the user can post a text entry to the server that then every other user on that country page can see.

## CSS Deliverable:

For this deliverable I properly styled the application with CSS into its final appearance.

 - **Sectioning** - Header, footer, and main content body all have appropriate styling (background color, contrast between section, correct spacing)
 - **Resizing** - My website is able to resize across different screen sizes.
 - **Navigation elements** - Properly formatted navigation links in header and made the current pages link highlighted.
 - **Application text content** - Consistent fonts, and text coloring that contrasts background.
 - **Application images** - Used thumbnail styling for clickable images and used rounded borders for non-clickable images.
 - **Application elements** - Used good contrast and whitespace
 - 

 ## React Deliverable:


For this deliverable I used JavaScript and React so that the application completely works for a single user. I also added placeholders for future technology.


 - **Router** - Each page is routed-to on the app.jsx file. It will start on the login page and route the user to every other page after login.
 - **Hooks** - I use hooks to generate new descriptions and quotes on the country pages. The quote generation is mocking the funcitionality of API generated quotes that will be implemented later.
 - **Navigation elements** - I use navigation elements to create Navlinks on the top bar that routes the user to the desired page.
 - **Components** - The following was implmented with components!
     - **Login** - I used components for login capabilities.
     - **Websocket** I use components to display the username on each page in the top left. Later I will use websockets to get this username from the database to display.
 - **Vite Bundled** - This delveriable is bundled with Vite!

## Service deliverable

For this deliverable I added backend endpoints that receives login and fetch API calls and returns the needed response.

- **Node.js/Express HTTP service** - This is implimented in my service/index.js file. Refer to the "const express = require('express');"
- **Static middleware for frontend** - This is also implemented in my index.js file. Using API routers.
- **Calls to third party endpoints** - I implemented this in both my frontend and backend. I tried to just do a normal fetch call on my front end. However, I kept getting a "CORS" error so I had to do the API call in the backend. Then the frontend end calls the backend for this API response. (see Japan.jsx quote statement)
- **Backend service endpoints** - Placeholder for login that helps display the username on each of my webpages. In addition, I implemented a API call on my backend that my frontend calls.
- **Frontend calls service endpoints** - My frontend calls service end points in the back end using a fetch call and retrieves API calls in the backend and stored Username information.
