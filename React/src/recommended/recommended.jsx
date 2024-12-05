import React from 'react';
import './Recommended.css';

export function Recommended(props) {
  const [quote, setQuote] = React.useState('Quote Here!');
  
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  const quote_list = ['This is a place holder for third-party service call, but is using a component. Reload the page to see a new one', 'Reload the page to see a new quote I used components for!', 'Give this page a reload to see a new quote!']
  React.useEffect(() => {
    const random_choose = quote_list[Math.floor(Math.random() * quote_list.length)]
    setQuote(random_choose);
  }, []); 
  return (
    <main class="container-fluid bg-secondary text-center main">
    <p> {quote}</p>
      <p> Based on your previous searches Atlas recommends you look at these destinations below. 
          <br/> Just click on an image to go to that destination's page. 
           Happy adventuring!</p>
           <nav class = "navbar-dark">
            <menu class="navbar-nav">
                <a href="Japan.html"> <img class="img-thumbnail img-fluid" src="https://admin.expatica.com/jp/wp-content/uploads/sites/18/2023/11/tokyo-skyline-fuji.jpg" alt="Japan Image" height="400" width="400">
                    </img>
                    </a>
                </menu>
            </nav>
    </main>
  );
}