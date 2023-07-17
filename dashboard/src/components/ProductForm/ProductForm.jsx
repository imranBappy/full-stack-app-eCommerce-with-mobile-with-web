import { useGetBardsQuery } from "../../features/brand/brandApi";
import { useGetCategoriesQuery } from "../../features/category/categoryApi";
import InputFiled from "../InputFiled/InputFiled";
import Loading from "../ui/Loading";

const ProductForm = ({ product, handleInput, defaultCategory, defaultBrand, isLoading, handleSubmit }) => {

    const { data: categoriesData, isLoading: categoryLoading } = useGetCategoriesQuery();
    const { data: brandsData, isLoading: brandLoading } = useGetBardsQuery();
    return (
        <>
            {(categoryLoading || brandLoading) ? <Loading /> :

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
                            defaultCategory,
                            ...categoriesData.categories || []
                        ]}
                        placeholder="category"
                        name="category" />
                    <InputFiled
                        handleInput={handleInput}
                        value={product['brand']}
                        options={[
                            defaultBrand,
                            ...brandsData.brands || []
                        ]}
                        type="select"
                        placeholder="brand"
                        name="brand" />


                    <button disabled={isLoading} onClick={handleSubmit} className=" ring-1 ring-primary dark:bg-primary2 w-40 py-3 text-center   dark:text-dark4 btn btn-primary font-semibold">
                        {
                            isLoading ? 'Loading...' : 'Submit'
                        }
                    </button>
                </form>
            }

        </>
    );
};

export default ProductForm;