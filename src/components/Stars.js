import React, {useState} from 'react';

export default function Stars () {

    //setting the state of the stars
    let [stars, setStarsCount] = useState(0);

    const [isHandleClicked, setIsButtonClicked] = useState(false);


    //handles the click event
    const handleClick = () => {

        setIsButtonClicked(true);

        if(isHandleClicked) {
            setStarsCount (stars + 1);
        };

    };

    //returns the button
    return(
        <button type='button' min='0' max='5' className='btn btn-primary starRating d-flex justify-content-end' onClick={handleClick}>

            {stars} ⭐

        </button>
    );

};