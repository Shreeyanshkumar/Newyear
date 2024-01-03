import { useState } from 'react';
import './App.css';

function App() {

  const [fieldValue, setFieldValue] = useState('')

  return (
    <div className="App">
      <h1>Cann't Tell Them directly?</h1>
      <h1>Fikar Not</h1>
      <h2>We are here to help you</h2>
      <h1>Just drop Your Feelings for your love.</h1>
      <h2>And the best part is we wont know your name even.</h2>
      <form>
        <input type="text" name="" id="" value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} />
      </form>
      <div>
        {fieldValue}
      </div>
    </div>
  );
}

export default App;