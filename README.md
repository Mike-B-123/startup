# startup
## Elevator Pitch: 
We seek to travel not to be tourists, but to be adventures! Sadly, whenever you look for things to do when traveling all that pops up are the same old touristy instagramy experiences: visit the go eat a croissant in France, see a Broadway play in New York, etc. These may be fun and exciting things, but the sense of adventure is lost in the swarms of people doing the same activities. That’s why I want to create a website where people can find bucket list worthy experiences, and truly have an adventure on their next trip. All that you have to do is click on your destination and you can find different people’s posts about exciting activities to try off the beaten path: paragliding in France, underwater scooters in Croatia, or truffle hunting in Switzerland. Truly bucket list worthy adventure is just a click away!!

## Key Features:
  -	Ability to display recommended destinations based on previous site visits
  -	Secure Login
  -	Ability to post text entries to website
  -	Clickable menu for easy site navigation
  -	Can see other user’s text posts and main site posts
  -	Ability to save website content to user’s account for easy future access
  -	Ability for Admin to create and delete user entries
    
## Technologies:

- HTML: Four navigable HTML pages. One for login, one home page, one destination, and one for “My List”. Hyperlinks to specific pages. This will provide the overall structure for the application.
- CSS: Will use for styling purposes making sure the website is more accessible and pleasing. In addition, will help me define where elements are on application.
- React: React will help with login credentials and seeing other user’s “experience” posts. Will be used for the overall functionality of the application: navigating different pages of the site, submitting posts, and saving posts.
- Service: Backend service will process client requests and send to database including:
  o login
  o Saving Destinations
  o Fetching Data (such as posts) from Database
  o Authentication for Login
  o Submitting posts to database
- DB/Login: This will store user data, post data, the ability for users to login, destination data.
- WebSocket: When a user posts their written text “experience” that post is then made available for each other user to see. Creates a peer-to-peer relationship between client “posts”. Allows multiple user to receive live updates from other posts.

![Startup](https://github.com/user-attachments/assets/f757198a-728f-4376-9112-992709c54a9d)
