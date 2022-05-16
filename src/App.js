import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import CardData from './data';
import './style.css';
const CardElements = CardData.map((ele)=>{
  return <Card
    image = {ele.coverImg}
    country = {ele.location}
    rating = {ele.stats.rating}
    review = {ele.stats.reviewCount}
    title = {ele.title}
    price = {ele.price}
  />
})
function App() {

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {CardElements}
    </div>
  );
}

export default App;
