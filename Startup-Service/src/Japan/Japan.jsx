import React from 'react';
import './Japan.css';

export function Japan(props) {
  const [description, setDescription] = React.useState('Loading...');
  const [quote, setQuote] = React.useState('Quote Here!');
  const [author, setQuoteAuthor] = React.useState('Quote Author Here!');
  
  // might have to get rid of description API
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);

    // change this for the stoic API
    // <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
    // double check that this works before using it on all other aspects
    // create a fetch request from the backend check simon login, it will be a relative URL
    fetch('/api/quote/response') 
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuote(data['q']);
        setQuoteAuthor(data['a']);
      })
      .catch();
  }, []);

  return (
    <main class="container-fluid bg-secondary text-center"> 
    <section>
    <h1>Japan</h1>
<img class="img-fluid rounded" src="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" alt="Image of Japan" width="125" height="100"></img>
      <p>Some fun facts about Japan: 
      <br/> Japan is actually made up of 6,582 islands, but only about 430 are inhabited. The largest islands are Kyushu, Hokkaido, Shikoku, and Honshu.
      <br/>Lastly, Japan is known for their high speed "bullet trains" and their punctuality, with an average delay of only 18 seconds. Try riding one next time you go! 
      </p>
    <hr />
      </section>
      <section>
  <h2>Atlas's Recommendations</h2>
  <img class="img-fluid rounded" src="https://heronscrossing.vet/wp-content/uploads/Golden-Retriever.jpg" alt="Golden-Retriever Image" width="125" height="100"></img>
<p> {quote} - {author}</p>
      <p>Our mascot Atlas recommends you try to go to Mount Fuji on your next visit to South Korea!
      <br/>Mount Fuji is Japan's highest peak, which is also the world's most climbed mountain. Happy adventuring! </p>
          <hr />
          <label for="See other people's posts here!" class="form-label"> This box below is a place holder for a websocket that allows you to see other people's posts</label>
          <textarea class="form-control" id="See other people's posts here!" rows="3"></textarea>
        <hr />
        <div class="mb-3">
          <label for="Enter your Bucket List post here" class="form-label"> Enter your Bucket List post below!</label>
          <textarea class="form-control" id="Enter your Bucket List post here" rows="3"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
        </section>
      </main>
  );
}