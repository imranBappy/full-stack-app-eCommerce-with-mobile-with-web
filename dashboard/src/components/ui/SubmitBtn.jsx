
const SubmitBtn = ({ isLoading }) => {
    return (
        <div className='my-5'>
            <button disabled={isLoading} className=" ring-1 ring-primary dark:bg-primary2 w-40 py-3 text-center   dark:text-dark4 btn btn-primary font-semibold">
                {
                    isLoading ? 'Loading...' : 'Submit'
                }
            </button>
        </div>
    );
};

export default SubmitBtn;