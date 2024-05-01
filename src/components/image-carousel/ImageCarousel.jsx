import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageCarousel.scss";
import PropTypes from "prop-types";

function ImageCarousel({ imageApiUrl, page, noOfImages }) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(imageApiUrl, page, noOfImages) {
        try {
            setLoading(true);
            const response = await fetch(`${imageApiUrl}?page=${page}}&limit=${noOfImages}`);
            if (response.ok) {
                const responseJson = await response.json();
                if (responseJson) {
                    console.log(responseJson);
                    setImages(responseJson);
                    setLoading(false);
                }
            } else {
                setLoading(false);
                throw new Error(`Cannot Fetch the Images - ${response.status} : ${response.statusText}`);
            }
        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);
            console.error("Error Fetching Images...", error);
        }
    }

    function handlePrevious() {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    }

    function handleNext() {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }

    useEffect(() => {
        if (imageApiUrl !== "") {
            fetchImages(imageApiUrl, page, noOfImages);
        }
    }, [imageApiUrl, page, noOfImages]);

    if (loading) {
        return (
            <div className="image-carousel-component">
                <div className="image-container">Fetching Images...</div>
            </div>
        );
    }

    if (errorMsg) {
        return (
            <div className="image-carousel-component">
                <div className="image-container">{errorMsg}</div>
            </div>
        );
    }

    return (
        <div className="image-carousel-component">
            <div className="image-container">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious}></BsArrowLeftCircleFill>
                {images && images.length
                    ? images.map((imageItem, index) => (
                          <img
                              key={imageItem.id}
                              alt={imageItem.download_url}
                              src={imageItem.download_url}
                              className={currentImage === index ? "current-image" : "current-image hidden"}
                          />
                      ))
                    : null}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}></BsArrowRightCircleFill>
                <span className="circle-indicators">
                    {images && images.length
                        ? images.map((_, index) => (
                              <button
                                  key={index}
                                  className={currentImage === index ? "current-indicator" : "current-indicator inactive"}
                                  onClick={() => setCurrentImage(index)}
                              ></button>
                          ))
                        : null}
                </span>
            </div>
        </div>
    );
}

ImageCarousel.propTypes = {
    imageApiUrl: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    noOfImages: PropTypes.number.isRequired,
};

export default ImageCarousel;
