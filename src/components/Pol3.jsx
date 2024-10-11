import React, { useState } from 'react';
import '../style/pol.css'
function Pol3() {
    const [voted, setVoted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [results, setResults] = useState({
      yoq: 23,
      yoq2: 10,
      yoq3: 13,
      xabariyoq: 24,
      ha: 30,
      totalVotes: 54
    });
  
    const handleVote = () => {
      if (selectedOption) {
        setVoted(true);
        // This is where you can update results dynamically after voting
        const newResults = { ...results };
        newResults[selectedOption] += 1;
        newResults.totalVotes += 1;
        setResults(newResults);
      }
    };
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  return (
    <div>
           <div className="poll-container">
    {!voted ? (
      <div className="poll">
        <h3>
        Davlat xizmatlarimizni qanday baholaysiz?</h3>
        <form>
          <div>
            <input 
              type="radio" 
              id="yoq" 
              name="poll" 
              value="yoq" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="yoq">5</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="yoq2" 
              name="poll" 
              value="yoq2" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="yoq2">4</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="yoq3" 
              name="poll" 
              value="yoq3" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="yoq3">3</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="xabariyoq" 
              name="poll" 
              value="xabariyoq" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="xabariyoq">2</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="ha" 
              name="poll" 
              value="ha" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="ha">1</label>
          </div>
          <button type="button" onClick={handleVote}>Ovoz berish</button>
        </form>
      </div>
    ) : (
      <div className="results_poll">
        <h3>Davlat xizmatlarimizni qanday baholaysiz?</h3>
        <div>
          <p>5</p>
          <div className="progress-bar" style={{ width: `${results.yoq}%`, backgroundColor: 'green' }}>
            {results.yoq}%
          </div>
        </div>
        <div>
          <p>4</p>
          <div className="progress-bar" style={{ width: `${results.yoq}%`, backgroundColor: 'green' }}>
            {results.yoq2}%
          </div>
        </div>
        <div>
          <p>3</p>
          <div className="progress-bar" style={{ width: `${results.yoq}%`, backgroundColor: 'green' }}>
            {results.yoq3}%
          </div>
        </div>
        <div>
          <p>2</p>
          <div className="progress-bar" style={{ width: `${results.xabariyoq}%`, backgroundColor: 'blue' }}>
            {results.xabariyoq}%
          </div>
        </div>
        <div>
          <p>1</p>
          <div className="progress-bar" style={{ width: `${results.ha}%`, backgroundColor: 'blue' }}>
            {results.ha}%
          </div>
        </div>
        <p>Barcha ovozlar: {results.totalVotes}</p>
      </div>
    )}
   
  </div>
    </div>
  )
}

export default Pol3
