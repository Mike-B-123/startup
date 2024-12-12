import React from 'react';
import './My_list.css';
import { useNavigate } from 'react-router-dom';

export function My_list(props) {
  const navigate = useNavigate();
  const [quote, setQuote] = React.useState('Quote Here!');
  const [author, setQuoteAuthor] = React.useState('Quote Author Here!');
  
  // might have to get rid of description API
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  const des_list = ['A beautiful and exciting country, Japan is filled with rich history and culture!', 'One of the most buetiful places on Earth', 'This is definately one for the bucket list!']
  const quote_list = ['This is a place holder for third-party service call, but is using a component. Reload the page to see a new one', 'Reload the page to see a new quote I used components for!', 'Give this page a reload to see a new quote!']
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);

    // change this for the stoic API
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
    <main className="container-fluid bg-secondary text-center">
      <p> {quote} - {author}</p>
        <p> This is your very own bucket list where you can save your future destinations!
            <br/> Just click on an image to go to that destination's page. 
             Happy adventuring!</p>
        <div className="countrylink img-thumbnail" onClick={() => navigate("/japan")}> <img src="https://admin.expatica.com/jp/wp-content/uploads/sites/18/2023/11/tokyo-skyline-fuji.jpg" alt="Japan Image" width="150" height="150"></img> </div>
    </main>
  );
}