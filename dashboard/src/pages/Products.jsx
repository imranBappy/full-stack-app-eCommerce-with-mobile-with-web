import { Link } from "react-router-dom";
import ProductTable from "../components/Table/ProductsTable";

const Products = () => {
    return (
        <div >
            <div>
                <Link to={'/addProduct'}>
                    <button className=" dark:bg-primary2 w-40 py-3 text-center   dark:text-dark4 btn btn-primary font-semibold">
                        Add Product
                    </button>
                </Link>
            </div>
            <ProductTable />

        </div>
    );
};

export default Products;