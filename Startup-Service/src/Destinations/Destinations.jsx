import React from 'react';
import './Destinations.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Destinations(props) {
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
    fetch('https://quote.cs260.click') 
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, [])

  return (
    <main class="container-fluid bg-secondary text-center main">
    <img class = "img-fluid rounded" src="https://media.istockphoto.com/id/1257931302/vector/high-detailed-old-world-map-with-decorative-elements.jpg?s=612x612&w=0&k=20&c=vY2ztW4nrbvfUcX-1juwjTxPN5vMv3cSEr8h6r9rKA0=" alt="An old map" width="200" height="150"></img>
      <p> {quote} - {author}</p>
        <p> This is the page where you can see every destination that people have posted about
            <br/> Just click on an image to go to that destination's page. 
            Best of luck finding your next dream destination!</p>
            <nav class = "navbar-dark">
          <menu class="navbar-nav">
         <div className="countrylink img-thumbnail" onClick={() => navigate("/japan")}> <img src="https://admin.expatica.com/jp/wp-content/uploads/sites/18/2023/11/tokyo-skyline-fuji.jpg" alt="Japan Image" width="150" height="150"></img> </div>
          <div onClick={() => navigate("/southkorea")} className="countrylink img-thumbnail" > <img src="https://silversea-discover.imgix.net/2022/12/QCRUa0gV-2asunsetinSeoulskyline_1490190263.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="South Korea" width="150" height="150"></img></div>
        </menu>
      </nav>
    </main>
  );
}