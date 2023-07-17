import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm/ProductForm";
import { usePostProductMutation } from "../features/product/productApi";
import { toast } from "react-toastify";

const AddProduct = () => {

    const [postProduct, { status, isLoading }] = usePostProductMutation()

    const defaultCategory =
    {
        _id: "",
        name: "Select Category"
    }

    const defaultBrand =
    {
        _id: "",
        name: "Select Brand"
    }

    useEffect(() => {
        if (status === 'fulfilled') {
            toast.success("category successfully added!");
            setProduct({
                name: '',
                price: '',
                stock: '',
                category: '',
                brand: '',
                thumbnail: '',
            })
        } else if (status === 'rejected') {
            toast.error("There was an error!")
        }
    }, [status])

    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        category: '',
        brand: '',
        thumbnail: '',
    })



    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (e.target.type == 'file') {
            const inputImage = e.target.files[0]
            setProduct({ ...product, thumbnail: inputImage })
        } else if (e.target.type == 'text') {
            setProduct({ ...product, [name]: value })
        } else {
            setProduct({ ...product, [name]: value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('name', product['name'])
        formData.append('price', product['price'])
        formData.append('stock', product['stock'])
        formData.append('category', product['category'])
        formData.append('brand', product['brand'])
        formData.append('thumbnail', product['thumbnail'])

        postProduct(formData)
        console.log(product);
    }
    return (
        <div>
            <h1 className=" text-white">Add Product</h1>
            <div className='theme_component  py-10  max-w-5xl  mx-auto '>
                {

                    <ProductForm
                        defaultCategory={defaultCategory}
                        defaultBrand={defaultBrand}
                        product={product}
                        handleInput={handleInput}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                }

            </div>
        </div>
    );
};

export default AddProduct;