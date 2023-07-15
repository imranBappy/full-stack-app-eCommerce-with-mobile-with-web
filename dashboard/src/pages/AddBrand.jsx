import BrandForm from "../components/brandForm/brandForm";


const AddBrand = () => {
    return (
        <div>
            <h1 className=" text-white">Add Brand</h1>
            <div className='theme_component  py-10  max-w-5xl  mx-auto '>
                <BrandForm />
            </div>
        </div>
    );
};

export default AddBrand;