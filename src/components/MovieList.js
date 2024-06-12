import MovieCard from '../components/MovieCard.js';

export default function MovieList () {

    //movie objects
    let movies = [

        {
            id: 1, 
            title: 'Mad Max', 
            paraText: 'Max has gone mad in the desert and is ready for some action', 
            src: 'https://m.media-amazon.com/images/I/81JnqdgWM4L.jpg',
            reviews:[]
        },

        {
            id: 2,
            title: 'Toy Story',
            paraText: 'Toys come to life!',
            src: 'https://m.media-amazon.com/images/I/71iSIVGZQUL._AC_UF1000,1000_QL80_.jpg',
            reviews:[]
        },

        {
            id: 3,
            title: 'War of the Planet of the Apes',
            paraText: 'Apes are ready for war with the humans after many years of experiments!',
            src: 'https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_.jpg',
            reviews:[]
        }


    ];

    //mapping through movies
    let items = movies.map((movie) => {

        return <MovieCard key={ movie.id } movie={ movie }/>

    })

    return(

        <div className='container d-flex flex-wrap border rounded border-info'>

            { items }

        </div>

    )

}