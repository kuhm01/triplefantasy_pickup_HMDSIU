import './Main.css';
import useCountStore from '../../store/count_store.js'
import Generator_probability from '../../generator/Generator';
import Judge from '../../judge/Judge';

function Main() {

  const { count, increaseCount } = useCountStore(state => state);

  let randomnumber = Generator_probability();

  let rarelevel = Judge(randomnumber);

  return (
    <div className="Main">
      <header className="Main-header">
        <p>
          이 번에 뜬 카드 등급 : {rarelevel}
        </p>
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

export default Main;