// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer-continued';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const App = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [differences, setDifferences] = useState('');
  const [isCompared, setIsCompared] = useState(false)

  const compareTexts = async () => {
    try {
      const response = await axios.post('http://localhost:3001/compare', { text1, text2 });
      setDifferences(response.data.differences);
      setIsCompared(true);
    } catch (error) {
      console.error('Error comparing texts:', error);
      setDifferences('')
    }
  };

  // useEffect(() => {
  //   setIsCompared(false);
  // }, [text1, text2])

  const handleTextChange1 = (e) => {
    setText1(e.target.value);
    setIsCompared(false);
  }

  const handleTextChange2 = (e) => {
    setText2(e.target.value);
    setIsCompared(false);
  }

  const handleClearText = (e) => {
    setText1('');
    setText2('');
    setDifferences('');
    setIsCompared(false);
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 text-center mt-0">
        <div className="text-white font-bold text-xl">Text Comparator</div>
      </nav>
      <div className="container mx-auto p-4">
        {/* buttons */}
        <div className="mt-2 text-center">
          <button
            className="mt-2 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={compareTexts}
          >
            Compare
          </button>

          <button
            className=" mx-10 bg-gray-500 hover:bg-gray-70 text-white font-bold py-2 px-4 rounded"
            onClick={handleClearText}
          >
            Clear all
          </button>
        </div>

        {/* Main Content */}
        <div className="mt-4 flex">
          <textarea
            className="flex-1 h-64 border rounded p-2 mr-2"
            value={text1}
            onChange={handleTextChange1}
            placeholder="Enter Text 1"
          />
          <textarea
            className="flex-1 border rounded p-2 ml-2"
            value={text2}
            onChange={handleTextChange2}
            placeholder="Enter Text 2"
          />
        </div>

        {isCompared && differences && (
          <div className="mt-4">
            <h2 className="text-xl font-bold text-center">Differences:</h2>
            <ReactDiffViewer
              oldValue={text1}
              newValue={text2}
              splitView={true}
              compareMethod={DiffMethod.CHARS}
            />
          </div>
        )}

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        Made by Abhishek Rath
      </footer>
      </div>
    </>

  );
};

export default App;
