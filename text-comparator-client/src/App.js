import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [differences, setDifferences] = useState('');

  const compareTexts = async () => {
    try {
      const response = await axios.post('http://localhost:3001/compare', { text1, text2 });
      setDifferences(response.data.differences);
    } catch (error) {
      console.log("Error comparing texts: ", error);
    }
  }

  return (
    <div className="App">
      <textarea value={text1} onChange={(e) => setText1(e.target.value)} />
      <textarea value={text2} onChange={(e) => setText2(e.target.value)} />
      <button onClick={compareTexts}>Compare</button>
      <div className="differences">
        <h2>Differences</h2>
        <div dangerouslySetInnerHTML={{ __html: differences }}></div>
      </div>
    </div>
  );
}

export default App;
