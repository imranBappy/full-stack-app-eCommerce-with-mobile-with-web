import { useEffect, useState } from "react";
import InputFiled from "../InputFiled/InputFiled";
import { useGetCategoriesQuery } from "../../features/category/categoryApi";
import { useGetBardsQuery } from "../../features/brand/brandApi";
import { usePostProductMutation } from "../../features/product/productApi";
import { toast } from "react-toastify";
import Loading from "../ui/Loading";

const ProductForm = () => {

    const { data: categoriesData, isLoading: categoryLoading } = useGetCategoriesQuery();
    const { data: brandsData, isLoading: brandLoading } = useGetBardsQuery();
    const [postProduct, { status, isLoading }] = usePostProductMutation()
    const { categories = [] } = categoriesData || {};
    const { brands = [] } = brandsData || {};


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
        console.log({ name, value });
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
        <>
            {
                (categoryLoading || brandLoading) ? <Loading/>:

                    <form className=" max-w-4xl  mx-auto">
                        <InputFiled handleInput={handleInput} type="file" name="thumbnail" />

                        <InputFiled handleInput={handleInput} type="text" value={product['name']} placeholder="Name" name="name" />
                        <InputFiled handleInput={handleInput} type="text" value={product['price']} placeholder="Price" name="price" />
                        <InputFiled handleInput={handleInput} type="text" value={product['stock']} placeholder="Stock" name="stock" />

                        <InputFiled
                            handleInput={handleInput}
                            type="select"
                            value={product['category']}
                            options={[
                                {
                                    _id: "",
                                    name: "Select Category"
                                },
                                ...categories
                            ]}
                            placeholder="category"
                            name="category" />
                        <InputFiled
                            handleInput={handleInput}
                            value={product['brand']}
                            options={[
                                {
                                    _id: "",
                                    name: "Select Brand"
                                },
                                ...brands
                            ]}
                            type="select"
                            placeholder="brand"
                            name="brand" />


                        <button disabled={isLoading} onClick={handleSubmit} className=" dark:bg-primary2 w-40 py-3 text-center   dark:text-dark4 btn btn-primary font-semibold">
                            {
                                isLoading ? 'Loading...' : 'Add Product'
                            }
                        </button>
                    </form>
            }
        </>
    );
};

export default ProductForm;