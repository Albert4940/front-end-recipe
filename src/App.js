import logo from './logo.svg';
import './App.css';
import { data } from './data.js';
import Item from './components/Item';

function App() {
  
  return (
    <section class="timeline-area">
      {data.map((item,i) => <Item key={i} {...item} index={i}/>)}
      <Item key={"last"} index={"last"}/>
    </section>
  );
}

export default App;
