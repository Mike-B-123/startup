import React from 'react';
import './My_list.css';
import { useNavigate } from 'react-router-dom';

export function My_list(props) {
  const [quote, setQuote] = React.useState('Quote Here!');
  const navigate = useNavigate();
  
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  const quote_list = ['This is a place holder for third-party service call, but is using a component. Reload the page to see a new one', 'Reload the page to see a new quote I used components for!', 'Give this page a reload to see a new quote!']
  React.useEffect(() => {
    const random_choose = quote_list[Math.floor(Math.random() * quote_list.length)]
    setQuote(random_choose);
  }, [])
  return (
    <main class="container-fluid bg-secondary text-center">
      <p> {quote}</p>
        <p> This is your very own bucket list where you can save your future destinations!
            <br/> Just click on an image to go to that destination's page. 
             Happy adventuring!</p>
        <div className="countrylink img-thumbnail" onClick={() => navigate("/japan")}> <img src="https://admin.expatica.com/jp/wp-content/uploads/sites/18/2023/11/tokyo-skyline-fuji.jpg" alt="Japan Image" width="150" height="150"></img> </div>
    </main>
  );
}