import React, {useState} from 'react';

export default function ReviewForm (props) {

    const [review, setReview] = useState('');

    const handleChange = (e) => {

        setReview(e.target.value);

    };

    const handleButtonClick = (e) => {

        if(props.onReview) {

            props.onReview(review, e);

        }
        
        setReview('');

    };

    return (

        <form className="form container input-group  d-flex">

            <span className="input-group-text">Type your review</span>

            <input type="text" value={review} onChange={ handleChange } className="form-control"></input>
            
            <button type='button' onClick={ handleButtonClick } className="btn btn-outline-secondary">submit</button>

        </form>

    )


}