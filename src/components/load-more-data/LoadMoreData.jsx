import { useEffect, useState } from "react";
import "./LoadMoreData.scss";

function LoadMoreData() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts(currentCount) {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${currentCount === 0 ? 0 : currentCount * 20}`
            );
            if (response.ok) {
                const responseJson = await response.json();
                if (responseJson && responseJson.products && responseJson.products.length) {
                    console.log(responseJson);
                    setProducts((prevData) => [...prevData, ...responseJson.products]);
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

    useEffect(() => {
        fetchProducts(count);
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true);
        }
    }, [products]);

    if (loading) {
        return (
            <div className="load-more-data-component">
                <div className="products-container-message">Loading Products...</div>
            </div>
        );
    }

    if (errorMsg) {
        return (
            <div className="load-more-data-component">
                <div className="products-container-message">{errorMsg}</div>
            </div>
        );
    }

    return (
        <div className="load-more-data-component">
            <div className="products-container">
                {products && products.length
                    ? products.map((productItem) => (
                          <div className="product-item" key={productItem.id}>
                              <h5>{productItem.id}</h5>
                              <img src={productItem.thumbnail} alt={productItem.title} />
                              <h4>{productItem.title}</h4>
                          </div>
                      ))
                    : null}
            </div>
            <div className="buttons-container">
                <button
                    className="load-more-products-button"
                    onClick={() => setCount(count + 1)}
                    disabled={disableButton}
                >
                    Load More Products
                </button>
                {disableButton ? <p>You have reached a limit of 100 Products!</p> : null}
            </div>
        </div>
    );
}

export default LoadMoreData;
