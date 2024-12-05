import React from 'react';
import './South Korea.css';

export function South_Korea(props) {
  const [description, setDescription] = React.useState('loading...');
  const [quote, setQuote] = React.useState('Quote Here!');
  
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  const des_list = ['A beautiful and exciting country, Japan is filled with rich history and culture!', 'One of the most buetiful places on Earth', 'This is definately one for the bucket list!']
  const quote_list = ['This is a place holder for third-party service call for quotes, but is using a component. Reload the page to see a new one', 'reload page for new quote!', 'Reload the page to see a new quote I used components for!', 'Give this page a reload to see a new quote!']
  React.useEffect(() => {
    const random_choose_d = des_list[Math.floor(Math.random() * des_list.length)]
    setDescription(random_choose_d);
    const random_choose_q = quote_list[Math.floor(Math.random() * quote_list.length)]
    setQuote(random_choose_q);
  }, []);

  return (
    <main class="container-fluid bg-secondary text-center">
    <section>
      <h1>South Korea</h1>
      <img class="img-fluid rounded" src="https://silversea-discover.imgix.net/2022/12/QCRUa0gV-2asunsetinSeoulskyline_1490190263.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="Image of South Korea" width="125" height="100"></img>
        <p>{description} Some fun facts about South Korea: 
        <br/> Kimchi is a famous Koren dish and has been part of Korean food culture for thousands of years! 
        Try it next time you visit.<br/>The top three largest cities in South Korea are Seoul (pop: 10,349,312), Busan	(pop: 3,678,555), and
    Incheon (pop: 2,954,955).<br/> Visit them next time you go!</p>
      <hr />
      </section>
      <br/>
      <section>
    <h2>Atlas's Recommendations</h2>
    <img class="img-fluid rounded" src="https://heronscrossing.vet/wp-content/uploads/Golden-Retriever.jpg" alt="Golden-Retriever Image" width="125" height="100"></img>
      <p> {quote}</p>
        <p>Our mascot Atlas recommends you try to go to Gyeongbokgung Palace on your next visit to South Korea!
        <br/>The largest of the five grand palaces built in 1395, and considered by many to be the most beautiful palace in Seoul. </p>
        <form>
          <hr />
          <label for="See other people's posts here!" class="form-label"> This box below is a place holder for a websocket that allows you to see other people's posts</label>
          <textarea class="form-control" id="See other people's posts here!" rows="3"></textarea>
          <hr />
    <div class="mb-3">
      <label for="Enter your Bucket List post here" class="form-label"> Enter your Bucket List post below!</label>
      <textarea class="form-control" id="Enter your Bucket List post here" rows="3"></textarea>
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    </section>
    </main>

  );
}

// paragraph functionality:
// async function loginUser() {
//   localStorage.setItem('userPost', userPost);
// }
// update local state to refresh page
// const [textBox, setTextBox] = React.useState(maybe put a black here since I just want to make the text box black??);
// Then use another hook function that updates where that post is supposed to appear and puts the text there