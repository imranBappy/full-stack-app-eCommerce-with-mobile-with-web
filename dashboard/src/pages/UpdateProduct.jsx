import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductForm from "../components/ProductForm/ProductForm";
import { useGetProductsQuery, useUpdateProductMutation } from "../features/product/productApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [updateProduct, { status, isLoading }] = useUpdateProductMutation();
    const { data, status: productGetStatus } = useGetProductsQuery();
    const { productId } = useParams();


    const [defaultBrand, setDefaultBrand] = useState({
        _id: "",
        name: "Select Brand"
    })
    const [defaultCategory, setDefaultCategory] = useState({
        _id: "",
        name: "Select Category"
    })
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        category: '',
        brand: '',
        thumbnail: '',
    })
    const navigate = useNavigate();
    useEffect(() => {
        if (status === 'fulfilled') {
            toast.success("successfully updated!");
            setProduct({
                name: '',
                price: '',
                stock: '',
                category: '',
                brand: '',
                thumbnail: '',
            })
            setDefaultBrand({
                _id: "",
                name: "Select Brand"
            })
            setDefaultCategory({
                _id: "",
                name: "Select Category"
            })
            navigate('/products')
        } else if (status === 'rejected') {
            toast.error("There was an error!")
        }
    }, [status, navigate])



    useEffect(() => {
        if (productGetStatus === 'fulfilled') {
            const findProduct = data?.products?.find(product => product._id === productId);
            if (findProduct) {
                setProduct({
                    ...findProduct,
                    category: findProduct.category._id,
                    brand: findProduct.brand._id,
                })
                setDefaultBrand({ ...findProduct.brand })
                setDefaultCategory({ ...findProduct.category })
            }

            console.log({ findProduct });
        }
    }, [productGetStatus, productId, data?.products])


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

        if (product._id) {
            updateProduct({ _id: product._id, product: formData });
        }
    }
    return (
        <div>
            <h1 className=" text-white">Product Update</h1>
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

export default UpdateProduct;