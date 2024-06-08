import { forwardRef } from "react";
import PropTypes from "prop-types";

const ProductDataContainer = forwardRef(function ProductDataContainer({ data }, ref) {
    return (
        <div className="scroll-data" ref={ref}>
            <table>
                <tbody>
                    {data.map((dataItem, index) => (
                        <tr key={dataItem.id}>
                            <td>{index + 1}</td>
                            <td>{dataItem.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});

ProductDataContainer.propTypes = {
    data: PropTypes.array,
};

export default ProductDataContainer;
