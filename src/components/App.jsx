import "./App.scss";
import Accordion from "./accordion/Accordion";
import ColorGenerator from "./color-generator/ColorGenerator";
import StarRatings from "./star-ratings/StarRatings";
import ImageCarousel from "./image-carousel/ImageCarousel";
import LoadMoreData from "./load-more-data/LoadMoreData";

function App() {
    return (
        <div className="app-component">
            {/* Accordion Component*/}
            <Accordion></Accordion>
            {/* Random Color Generator Component*/}
            <ColorGenerator></ColorGenerator>
            {/* Star Ratings Component*/}
            <StarRatings noOfStars={10}></StarRatings>
            {/* Image Carousel Component */}
            <ImageCarousel
                imageApiUrl={"https://picsum.photos/v2/list?page=1"}
                page={1}
                noOfImages={12}
            ></ImageCarousel>
            {/* Load MoreData Component */}
            <LoadMoreData></LoadMoreData>
        </div>
    );
}

export default App;
