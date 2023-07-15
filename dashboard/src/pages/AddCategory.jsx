import CategoryForm from "../components/CategoryForm/CategoryForm";


const AddCategory = () => {
    return (
        <div>
            <h1 className=" text-white">Add Category</h1>
            <div className='theme_component  py-10  max-w-5xl  mx-auto '>
                <CategoryForm />
            </div>
        </div>
    );
};

export default AddCategory;