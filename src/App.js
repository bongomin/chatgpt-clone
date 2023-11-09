import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSideTop'>
          <img src='' alt='logo' className='logo'/>
          <span className='brand'>ChatGPT - Clone</span>
          <button className='midBtn'>
            <img src='' alt='add button' className='addBtn'/>
            New Chat
          </button>
          <div className='upperSideBottom'>
            <button className='query'><img src='' alt='query' className='query'/>What is Programming</button>
            <button className='query'><img src='' alt='query' className='query'/>What is Programming</button>
          </div>
        </div>
        <div className='lowerSide'></div>

      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;
