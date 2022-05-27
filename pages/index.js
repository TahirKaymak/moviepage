import Link from "next/link";
import Header from "../components/Header";

export default function home({ movies }) {

  function handleClick(event) {
    //console.log("button clicked")
    console.log(event.pageY)
  }
  return (
    <div>
      <div className="wrapper">
        <ul className="card-feature">
          <li className="card-item"><img className="card-background" src="https://images.hdqwalls.com/download/the-mandalorian-4k-artwork-2020-17-3840x2400.jpg" />
            <h2 className="card-heading">The Mandolorian</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://1.bp.blogspot.com/-1eDQR6mytl4/YCuDYRykEOI/AAAAAAABHEE/tQ_hPGVqxdYfZ7zUXnEfAjlRXshM10I4wCLcBGAsYHQ/w0/
                   obi-wan-kenobi-star-wars-character-4k-os-2560x1440.jpg" />
            <h2 className="card-heading">Obi Wan Kenobi</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://trumpwallpapers.com/wp-content/uploads/Darth-Vader-Wallpaper-42-2560x1440-1.jpg" />
            <h2 className="card-heading">Darth Vader</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://static2.srcdn.com/wordpress/wp-content/uploads/2019/04/Star-Wars-The-Last-Jedi-Luke-Skywalker-Mark-Hamill.jpg" />
            <h2 className="card-heading">Luke Skywalker</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://wallpapersmug.com/download/2048x1152/10903a/yoda-star-wars-battlefront-ii-game-minimal.jpg" />
            <h2 className="card-heading">Yoda</h2>
          </li>
        </ul>
        <ul className="card-feature">
          <li className="card-item"><img className="card-background" src="https://images.hdqwalls.com/download/the-mandalorian-4k-artwork-2020-17-3840x2400.jpg" />
            <h2 className="card-heading">The Mandolorian</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://1.bp.blogspot.com/-1eDQR6mytl4/YCuDYRykEOI/AAAAAAABHEE/tQ_hPGVqxdYfZ7zUXnEfAjlRXshM10I4wCLcBGAsYHQ/w0/
           obi-wan-kenobi-star-wars-character-4k-os-2560x1440.jpg" />
            <h2 className="card-heading">Obi Wan Kenobi</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://trumpwallpapers.com/wp-content/uploads/Darth-Vader-Wallpaper-42-2560x1440-1.jpg" />
            <h2 className="card-heading">Darth Vader</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://static2.srcdn.com/wordpress/wp-content/uploads/2019/04/Star-Wars-The-Last-Jedi-Luke-Skywalker-Mark-Hamill.jpg" />
            <h2 className="card-heading">Luke Skywalker</h2>
          </li>
          <li className="card-item"><img className="card-background" src="https://wallpapersmug.com/download/2048x1152/10903a/yoda-star-wars-battlefront-ii-game-minimal.jpg" />
            <h2 className="card-heading">Yoda</h2>
          </li>
        </ul>
        <Header />
        <div className="container">
          {movies.Search.length > 0 ? movies.Search.map((item, i) => <div key={i} className="card">
            <a className="card-link">
              <h5>{item.Title}</h5>
              <img src={item.Poster} />
            </a>
          </div>) : ''}
        </div>
      </div>
    </div>

  )
}
export async function getStaticProps() {
  const request = await fetch('http://www.omdbapi.com/?s=star&apikey=480344f1&r=json')
  const movies = await request.json();
  console.log(movies);
  return {
    props: {
      movies
    }
  }

}

