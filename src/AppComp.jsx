import './App.css';
import ArrowDown from './resources/ArrowDown'
import ArrowUp from './resources/ArrowUp'

function AppComp({ 
  opened,
  songs,
  search,
  handleSearch, 
  resetSearch,
  selectedSong,
  isFetched,
  toggleSelector,
  keyHandler,
}) {
  const icon = opened ? <ArrowUp /> : <ArrowDown />

  const elementsContainer = opened ? (
    <div className="SelectorContainer">
      <div className="item search">
        <input 
          type="text" 
          placeholder="Start typing..." 
          value={search} 
          onChange={handleSearch}
        />
        <button onClick={resetSearch}>X</button>
      </div>
      <div className="elements" >
        {
          isFetched ? (
            songs.length > 0 && songs.map((song, index) => <div tabIndex={index} onKeyDown={keyHandler} className="element" key={song.id}>{song.song}</div>)
          ) : <div className="item">No results</div>
        }
      </div>
    </div>
  ): '';

  return (
    <div className="App">
      <div className="song">{selectedSong}</div>
      <div className="selector">
        <div 
          onClick={toggleSelector} 
          className="selectItem" 
          tabIndex="0"
        >
          Select a song <div className="selectIcon">{icon}</div>
        </div>
        { elementsContainer }
      </div>
    </div>
  );
}

export default AppComp;