import { Link } from "react-router-dom";
import ServicesTable from "../components/Table/ServicesTable";
import { useGetCategoriesQuery } from "../features/category/categoryApi";


const Category = () => {
    const { data, isLoading } = useGetCategoriesQuery();
    console.log(data);
    console.log('category');
    return (
        <div >
            <div>
                <Link to={'/addBrand'}>
                    <button className=" dark:bg-primary2 w-40 py-3 text-center   dark:text-dark4 btn btn-primary font-semibold">
                        Add Category
                    </button>
                </Link>
            </div>
            {/*  */}
            <ServicesTable
                data={data?.categories} />
        </div>
    );
};

export default Category;