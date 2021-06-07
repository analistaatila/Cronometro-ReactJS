import './App.css';
import Contador from './components/Contador';
import LabelCronometro from './components/LabelCronometro';

function App() {
  return (
    <div className="App">
      <LabelCronometro name="Cronômetro"/>
      <Contador/>
    </div>
  );
}

export default App;
