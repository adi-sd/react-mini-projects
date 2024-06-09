import "./App.scss";
import Accordion from "./accordion/Accordion";
import ColorGenerator from "./color-generator/ColorGenerator";
import StarRatings from "./star-ratings/StarRatings";
import ImageCarousel from "./image-carousel/ImageCarousel";
import LoadMoreData from "./load-more-data/LoadMoreData";
import SideMenu from "./side-menu/SideMenu";
import QrCodeGenerator from "./qr-code-generator/QrCodeGenerator";
import DarkMode from "./dark-mode/DarkMode";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";
import CustomTabsTest from "./custom-tabs/CustomTabsTest.test";

function App() {
    return (
        <div className="app-component">
            {/* Accordion Component*/}
            {/* <Accordion></Accordion> */}
            {/* Random Color Generator Component*/}
            {/* <ColorGenerator></ColorGenerator> */}
            {/* Star Ratings Component*/}
            {/* <StarRatings noOfStars={10}></StarRatings> */}
            {/* Image Carousel Component */}
            {/* <ImageCarousel
                imageApiUrl={"https://picsum.photos/v2/list?page=1"}
                page={1}
                noOfImages={12}
            ></ImageCarousel> */}
            {/* Load MoreData Component */}
            {/* <LoadMoreData></LoadMoreData> */}
            {/* Side Menu Component */}
            {/* <SideMenu></SideMenu> */}
            {/* QR Code Generator */}
            {/* <QrCodeGenerator></QrCodeGenerator> */}
            {/* Dark Mode */}
            {/* <DarkMode></DarkMode> */}
            {/* Custom Scroll Indicator */}
            {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=200"}></ScrollIndicator> */}
            {/* Custom Tabs */}
            <CustomTabsTest></CustomTabsTest>
        </div>
    );
}

export default App;
