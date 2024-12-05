import React from 'react';
import './Destinations.css';

export function Destinations(props) {
  const [quote, setQuote] = React.useState('Quote Here!');
  
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  const quote_list = ['This is a place holder for third-party service call, but is using a component. Reload the page to see a new one', 'One of the most buetiful places on Earth', 'Reload the page to see a new quote I used components for!', 'Give this page a reload to see a new quote!']
  React.useEffect(() => {
    const random_choose = quote_list[Math.floor(Math.random() * quote_list.length)]
    setQuote(random_choose);
  }, []);

  return (
    <main class="container-fluid bg-secondary text-center main">
    <img class = "img-fluid rounded" src="https://media.istockphoto.com/id/1257931302/vector/high-detailed-old-world-map-with-decorative-elements.jpg?s=612x612&w=0&k=20&c=vY2ztW4nrbvfUcX-1juwjTxPN5vMv3cSEr8h6r9rKA0=" alt="An old map" width="200" height="150"></img>
      <p> {quote}</p>
        <p> This is the page where you can see every destination that people have posted about
            <br/> Just click on an image to go to that destination's page. 
            Best of luck finding your next dream destination!</p>
            <nav class = "navbar-dark">
          <menu class="navbar-nav">
         <div class="img-thumbnail" to = "https://startup.thebucketlist.click/japan"> </div><img src="https://admin.expatica.com/jp/wp-content/uploads/sites/18/2023/11/tokyo-skyline-fuji.jpg" alt="Japan Image" width="150" height="150"></img>
          <a class="img-thumbnail" to ="https://startup.thebucketlist.click/southkorea"> <img src="https://silversea-discover.imgix.net/2022/12/QCRUa0gV-2asunsetinSeoulskyline_1490190263.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="South Korea" width="150" height="150"></img></a>
        </menu>
      </nav>
    </main>
  );
}