import React from 'react';
import './Japan.css';

export function Japan(props) {
  const [description, setDescription] = React.useState('Loading...');
  const [quote, setQuote] = React.useState('Quote Here!');
  
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  const des_list = ['A beautiful and exciting country, Japan is filled with rich history and culture!', 'One of the most buetiful places on Earth', 'This is definately one for the bucket list!']
  const quote_list = ['This is a place holder for third-party service call, but is using a component. Reload the page to see a new one', 'Reload the page to see a new quote I used components for!', 'Give this page a reload to see a new quote!']
  React.useEffect(() => {
    const random_choose_d = des_list[Math.floor(Math.random() * des_list.length)]
    setDescription(random_choose_d);
    const random_choose_q = quote_list[Math.floor(Math.random() * quote_list.length)]
    setQuote(random_choose_q);
  }, []);

  return (
    <main class="container-fluid bg-secondary text-center"> 
    <section>
    <h1>Japan</h1>
<img class="img-fluid rounded" src="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" alt="Image of Japan" width="125" height="100"></img>
      <p>{description} Some fun facts about Japan: 
      <br/> Japan is actually made up of 6,582 islands, but only about 430 are inhabited. The largest islands are Kyushu, Hokkaido, Shikoku, and Honshu.
      <br/>Lastly, Japan is known for their high speed "bullet trains" and their punctuality, with an average delay of only 18 seconds. Try riding one next time you go! 
      </p>
    <hr />
      </section>
      <section>
  <h2>Atlas's Recommendations</h2>
  <img class="img-fluid rounded" src="https://heronscrossing.vet/wp-content/uploads/Golden-Retriever.jpg" alt="Golden-Retriever Image" width="125" height="100"></img>
<p> {quote}</p>
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