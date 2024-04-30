import "./App.scss";
import Accordion from "./accordion/Accordion";
import ColorGenerator from "./color-generator/ColorGenerator";
import StarRatings from "./star-ratings/StarRatings";

function App() {
    return (
        <div className="app-component">
            {/* Accordion Component*/}
            <Accordion></Accordion>
            {/* Random Color Generator Component*/}
            <ColorGenerator></ColorGenerator>
            {/* Star Ratings Component*/}
            <StarRatings noOfStars={10}></StarRatings>
        </div>
    );
}

export default App;
