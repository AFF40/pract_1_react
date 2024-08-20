import ProductRow from './ProductRow';

const ProductCategoryRow = () => {
    return (
        <>
            <tr>
                <td colSpan="3"><strong>Frutas</strong></td>
            </tr>
            <ProductRow />
        </>
    );
}

export default ProductCategoryRow;
