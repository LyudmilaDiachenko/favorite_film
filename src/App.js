import './App.css';
import Favorite_film from './components/favorite_film';
import data from './data.json'

function App() {
  return (
    <div className="App">
        <Favorite_film
          key={`Favorite_film_${data.id}`}
          id={data.id}
          name={data.name}
          director={data.director}
          producer={data.producer}
          screenwriter={data.screenwriter}
          mainrole={data.mainrole}
          operator={data.operator}
          composer={data.composer}
          artist={data.artist}
          filmstudio={data.filmstudio}
          duration={data.duration}
          language={data.language}
          country={data.country}
          release={data.release}
          ganre={data.ganre}
          estimates={data.estimates}
          gathering={data.gathering}
          src={data.src}
        />
    </div>
  );
}

export default App;