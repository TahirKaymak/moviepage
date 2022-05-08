import { getNextInternalQuery } from 'next/dist/server/request-meta';
import { useRouter } from 'next/router'
import Header from "../../components/Header";
import Slider from "react-slick";



const Post = ({ movie }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    return <div>
        <Header />
        <div className="box"></div>
        <div className='main'>
            <div className='bg-section'>
                <div className='row'>
                    <div className='card'>
                        <img src={movie.Poster} />
                    </div>
                    <div className='content'>
                        <div className='title'>
                            <h1>{movie.Title}</h1>
                            <h1>( {movie.Year} )</h1>
                        </div>
                        <div className='facts'>
                            <h4>{movie.Genre}</h4>
                            <h4>{movie.Runtime}</h4>
                        </div>
                        <div className="pLot">
                            <h4>{movie.Plot}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
                   <div className='slider-card'></div>
            </Slider>
        </div>
    </div>
}
export async function getServerSideProps(context) {
    const { id } = context.query
    const request = await fetch('https://www.omdbapi.com/?i=' + id + '&apikey=480344f1&r=json')
    const movie = await request.json();
    console.log(movie);
    return {
        props: {
            movie
        }
    }

}
export default Post
