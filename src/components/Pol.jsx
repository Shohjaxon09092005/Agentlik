import React, { useState } from 'react';
import '../style/pol.css'
function Pol() {
    const [voted, setVoted] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [results, setResults] = useState({
      yoq: 46,
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
    <div className="poll-container">
    {!voted ? (
      <div className="poll">
        <h3>Siz "Bir million dasturchi" loyihasidan foydalandingizmi?</h3>
        <form>
          <div>
            <input 
              type="radio" 
              id="yoq" 
              name="poll" 
              value="yoq" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="yoq">Yo'q</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="xabariyoq" 
              name="poll" 
              value="xabariyoq" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="xabariyoq">Loyihadan xabarim yo'q</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="ha" 
              name="poll" 
              value="ha" 
              onChange={handleOptionChange} 
            />
            <label htmlFor="ha">Ha</label>
          </div>
          <button type="button" onClick={handleVote}>Ovoz berish</button>
        </form>
      </div>
    ) : (
      <div className="results">
        <h3>Siz "Bir million dasturchi" loyihasidan foydalandingizmi?</h3>
        <div>
          <p>Yo'q</p>
          <div className="progress-bar" style={{ width: `${results.yoq}%`, backgroundColor: 'green' }}>
            {results.yoq}%
          </div>
        </div>
        <div>
          <p>Loyihadan xabarim yo'q</p>
          <div className="progress-bar" style={{ width: `${results.xabariyoq}%`, backgroundColor: 'blue' }}>
            {results.xabariyoq}%
          </div>
        </div>
        <div>
          <p>Ha</p>
          <div className="progress-bar" style={{ width: `${results.ha}%`, backgroundColor: 'blue' }}>
            {results.ha}%
          </div>
        </div>
        <p>Barcha ovozlar: {results.totalVotes}</p>
      </div>
    )}
   
  </div>
  )
}

export default Pol
