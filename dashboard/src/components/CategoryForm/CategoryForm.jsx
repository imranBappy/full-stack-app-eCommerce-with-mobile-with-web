import { useEffect, useState } from "react";
import InputFiled from "../InputFiled/InputFiled";
import { usePostCategoryMutation } from "../../features/category/categoryApi";
import { toast } from "react-toastify";

const CategoryForm = () => {
    const [postCategory, { status, isLoading }] = usePostCategoryMutation()
    const [product, setProduct] = useState({
        name: '',
        thumbnail: '',
    })

    useEffect(() => {
        if (status === 'fulfilled') {
            toast.success("category successfully added!");
            setProduct({
                name: '',
                thumbnail: '',
            })
        } else if (status === 'rejected') {
            toast.error("There was an error!")
        }
    }, [status])
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (e.target.type == 'file') {
            const thumbnail = e.target.files[0]
            setProduct({ ...product, thumbnail })
        } else if (e.target.type == 'text') {
            setProduct({ ...product, [name]: value })
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(product);
        const formData = new FormData()
        formData.append('name', product['name'])
        formData.append('thumbnail', product['thumbnail'])
        postCategory(formData)
    }



    return (
        <form className=" max-w-4xl  mx-auto">
            <InputFiled handleInput={handleInput} type="file" name="thumbnail" />
            <InputFiled handleInput={handleInput} type="text" value={product['name']} placeholder="Name" name="name" />

            <button disabled={isLoading} onClick={handleSubmit} className=" dark:bg-primary2 w-40 py-3 text-center   dark:text-dark4 btn btn-primary font-semibold">
                {
                    isLoading ? 'Loading...' : 'Add Category'
                }
            </button>
        </form>
    );
};

export default CategoryForm;