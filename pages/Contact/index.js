import Link from "next/link";
import Header from "../../components/Header";
import {animateScroll as scroll} from 'react-scroll';

export default function home({ movies }) {
    return (
        <div>
            <div className="wrapper">
                <Header onClick={() => scroll.scrollToTop()} />
                <div className="container">
                    {movies.Search.length > 0 ? movies.Search.map((item, i) => <div key={i} className="card">
                        <Link href={'/movie/' + item.imdbID}>
                            <a className="card-link">
                                {item.Title}
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
