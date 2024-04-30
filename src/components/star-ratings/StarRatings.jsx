import { useState } from "react";
import PropTypes from "prop-types";
import "./StarRatings.scss";

import { FaStar } from "react-icons/fa";

function StarRatings({ noOfStars = 5 }) {
    const [currentRating, setCurrentRating] = useState(0);
    const [starHover, setStarHover] = useState(0);

    function handleClick(currentStarIndex) {
        setCurrentRating(currentStarIndex);
        console.log("Current Rating - " + currentStarIndex);
    }

    function handleMouseMove(currentStarIndex) {
        setStarHover(currentStarIndex);
    }

    function handleMouseLeave() {
        setStarHover(currentRating);
    }

    return (
        <div className="star-ratings-component">
            <div className="star-container">
                {[...Array(noOfStars)].map((_, index) => {
                    index++;
                    return (
                        <FaStar
                            key={index}
                            className={index <= (starHover || currentRating) ? "selected" : null}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        ></FaStar>
                    );
                })}
            </div>
        </div>
    );
}

StarRatings.propTypes = {
    noOfStars: PropTypes.number,
};

export default StarRatings;
