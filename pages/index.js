import Link from "next/link";
import Header from "../components/Header";

export default function home({ movies }) {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="box"></div>
        <div className="container">
          {movies.Search.length > 0 ? movies.Search.map((item, i) => <div key={i} className="card">
            <Link href={'/movie/' + item.imdbID}>
              <a className="card-link">
                <h5>{item.Title}</h5>
                <img src={item.Poster} />
              </a>
            </Link>
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
