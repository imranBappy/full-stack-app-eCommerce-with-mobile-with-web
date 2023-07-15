import ProductForm from "../components/ProductForm/ProductForm";


const AddProduct = () => {
    return (
        <div>
            <h1 className=" text-white">Add Product</h1>
            <div className='theme_component  py-10  max-w-5xl  mx-auto '>
                <ProductForm />

            </div>
        </div>
    );
};

export default AddProduct;