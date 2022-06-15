
import FormCard from './Components/FormCard/FormCard';
import ThankYouCard from './Components/ThankYouCard/ThankYouCard';
import './App.css';


function App() {
  return (
    <div style={{
      
    }} className="App">
      <header style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <FormCard />
      </header>
      <header style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <ThankYouCard />
      </header>
    </div>
  );
}

export default App;
