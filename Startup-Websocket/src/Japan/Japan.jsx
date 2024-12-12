import React from 'react';
import './Japan.css';

export function Japan(props) {
  const [multipleblogPosts, setmultipleBlogposts] = React.useState([]);
  const [socketblogPosts, setsocketblogPosts] = React.useState([]);
  const [quote, setQuote] = React.useState('Quote Here!');
  const [author, setQuoteAuthor] = React.useState('Quote Author Here!');
  
  // might have to get rid of description API
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  // Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

function appendMsg(msg) {
  setsocketblogPosts(old=>[...old, JSON.parse(msg)]);
}

function sendMessage(txt) {
  if (!!txt) {
    const out = `{"post":"${txt}"}`;
    // Append the message to out own list of web socket messages
    // appendMsg(out);
    // Notify the websocket with our new message
    socket.send(out);
  }
}
// Display that we have opened the webSocket
  React.useEffect(() => {
    socket.onopen = (event) => {};

    socket.onmessage = async (event) => {
      const text = await event.data.text();
      // Append messages we recieved from the websocket(internet)
      appendMsg(text);
    };

    socket.onclose = (event) => {
      socket.send(`{"post":"Somebody has left the field"}`)
      console.log("heelllo")
      appendMsg(`{"post":"You are gone..."}`)
    };
  }, []);

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch('/api/quote/response') 
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setQuote(data['q']);
        setQuoteAuthor(data['a']);
      })
      .catch();
  }, []);

  // This actually gets our blog posts
  React.useEffect(() => {
    fetch('/api/multiple')
      .then((response) => response.json())
      .then((multipleblogPosts) => {
        console.log(multipleblogPosts)
        setmultipleBlogposts(multipleblogPosts);
        setsocketblogPosts([]);
      });
  }, []);

  async function savePost(blogPost) {
    const newPost = {post: blogPost};

    await fetch('/api/blogPost', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newPost),
    }
  )};

  return (
    <main className="container-fluid bg-secondary text-center"> 
    <section>
    <h1>Japan</h1>
<img className="img-fluid rounded" src="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" alt="Image of Japan" width="125" height="100"></img>
      <p>Some fun facts about Japan: 
      <br/> Japan is actually made up of 6,582 islands, but only about 430 are inhabited. The largest islands are Kyushu, Hokkaido, Shikoku, and Honshu.
      <br/>Lastly, Japan is known for their high speed "bullet trains" and their punctuality, with an average delay of only 18 seconds. Try riding one next time you go! 
      </p>
    <hr />
      </section>
      <section>
  <h2>Atlas's Recommendations</h2>
  <img className="img-fluid rounded" src="https://heronscrossing.vet/wp-content/uploads/Golden-Retriever.jpg" alt="Golden-Retriever Image" width="125" height="100"></img>
<p> {quote} - {author}</p>
      <p>Our mascot Atlas recommends you try to go to Mount Fuji on your next visit to South Korea!
      <br/>Mount Fuji is Japan's highest peak, which is also the world's most climbed mountain. Happy adventuring! </p>
          <hr />
          <div > 
          {multipleblogPosts.length > 0 ? (
           multipleblogPosts.map((post, index) => <li key={index}>{post["post"]}</li>)
            ) : (
          <p>No Data Available</p>
              )}
          {socketblogPosts.length > 0 && socketblogPosts.map((post, index) => <li key={index}>{post["post"]}</li>)}
          </div>
        <hr />
        <div className="mb-3">
          <label for="Enter your Bucket List post here" className="form-label"> Enter your Bucket List post below!</label>
          <textarea class="form-control" id="Enter your Bucket List post here" rows="3"></textarea>
        </div>
        <button onClick={() => {
            // Prevent page reload
          const inputValue = document.getElementById('Enter your Bucket List post here').value;
          savePost(inputValue);
          sendMessage(inputValue);
           }} className="btn btn-primary" type="submit">Submit</button>
        </section>
      </main>
  );
}