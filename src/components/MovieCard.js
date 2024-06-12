import Stars from "./Stars";
import ReviewForm from "./ReviewForm";
import { useState } from 'react';

export default function MovieCard (props) {

    const [movie, setMovie] = useState(props.movie || {});

    //setting up some props
    let title = movie.title || props.title;
    let src = movie.src || props.src;
    let id = movie.id || props.id;
    let paraText = movie.paraText || props.paraText;


    //handles the review by pushing it and then making a copy of it so it shows on the site
    function handleReview(review) {

        movie.reviews.push(review);
        setMovie({ ...movie });

    }


    //returns the card
    return(

        <div className='card'>

            <div className='row g-0'>

                <div className='col-md-4'>

                    <img className='img-fluid rounded-start' alt="Movie Poster" src={src} id={id}></img>

                </div>

                <div className='col-md-8'>

                    <div className='card-body'>

                        <h5 className='title'>{title}</h5>

                        <p className='card-text'>{paraText}</p>

                        <Stars />

                        <br></br>

                        <h6>Review:</h6>

                        <br></br>

                        <ul>
                            {
                                (movie.reviews || []).map((review, index) => {

                                    return <li key={ index }> { review } </li>

                                })
                            }
                        </ul>

                        <ReviewForm onReview={ handleReview }/>

                    </div>

                </div>
            </div>   
        </div>

    );

};