import { Link } from "react-router-dom";
import ServicesTable from "../components/Table/ServicesTable";
import { useGetBardsQuery } from "../features/brand/brandApi";


const Brands = () => {
    const { data, isLoading } = useGetBardsQuery();
    console.log(data);
    return (
        <div >
            <div>
                <Link to={'/addBrand'}>
                    <button className=" dark:bg-primary2 w-40 py-3 text-center   dark:text-dark4 btn btn-primary font-semibold">
                        Add Brands
                    </button>
                </Link>
            </div>
            {/*  */}
            <ServicesTable
                data={data?.brands} />

        </div>
    );
};

export default Brands;