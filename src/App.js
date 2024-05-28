import logo from './logo.svg';
import './App.css';
import { data } from './data.js';
import Item from './components/Item';

function App() {
  return (
    <section class="timeline-area">
      {data.map(item => <Item {...item} />)}
    </section>
  );
}

export default App;
