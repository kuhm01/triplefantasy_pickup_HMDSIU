import './App.css';
import useCountStore from './store/count_store.js'

function App() {

  const { count, increaseCount } = useCountStore(state => state);

  let randomnumber = Math.round((Math.random() * 100) * 100) / 100;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          소모 다이아 {count * 10}
        </p>
        <p>
          시행 횟수 {count}
        </p>
        <p>
          _Expected_Probability_Value_P : {randomnumber}
        </p>
        <button onClick={() => {
          increaseCount();
          
        }}>뽑기!</button>
      </header>
    </div>
  );
}

export default App;
