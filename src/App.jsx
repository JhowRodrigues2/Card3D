import "./App.css";
function App() {
  return (
    <div className="card">
     <div className="card">
    <div className="card-content">
      <div className="card-front">
        <p className="sub-title">DC Universe</p>
        <h1 className="title">The Flash</h1>
        <p className="sub-title">2023</p>
      </div>

      <div className="card-back">
        <div className="back-title">The Flash</div>
        <div className="movie-description">
          <span>Synopsis: </span>The Flash travels through time to prevent the murder of his mother, but unwittingly causes changes that result in the creation of a multiverse.
        </div>
        <div className="genre">
          <span>Genre: </span>Action, Adventure, Sci-Fi
        </div>
        <div className="release-date">
          <span>Release Date: </span>16 June, 2023
        </div>
        <a href="https://www.youtube.com/watch?v=hebWYacbdvc" className="btn">Watch Trailer</a>
      </div>
    </div>
  </div>
  </div>
  );
}

export default App;
