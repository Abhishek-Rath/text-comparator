// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const App = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [differences, setDifferences] = useState('');

  const compareTexts = async () => {
    try {
      const response = await axios.post('http://localhost:3001/compare', { text1, text2 });
      setDifferences(response.data.differences);
    } catch (error) {
      console.error('Error comparing texts:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-center">
        <div className="text-white font-bold text-xl">Text Comparator</div>
      </nav>

      <button
        className="mt-2 mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={compareTexts}
      >
        Compare
      </button>

      {/* Main Content */}
      <div className="mt-4 flex">
        <textarea
          className="flex-1 h-64 border rounded p-2 mr-2"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          placeholder="Enter Text 1"
        />
        <textarea
          className="flex-1 border rounded p-2 ml-2"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          placeholder="Enter Text 2"
        />
      </div>
      
      <div className="mt-4">
        <h2 className="text-xl font-bold text-center">Differences:</h2>
        <div
          className="mt-2 bg-gray-200 p-2 border rounded"
          dangerouslySetInnerHTML={{ __html: differences }}
        ></div>
      </div>
    </div>
  );
};

export default App;
