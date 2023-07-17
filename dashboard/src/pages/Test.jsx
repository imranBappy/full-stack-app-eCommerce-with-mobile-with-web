
const Test = () => {
    return (
        <div>
            <div className="custom-select">
                <select>
                    <option value="" selected disabled>Select an option</option>
                    <option value="option1">
                        <div className='flex gap-3 items-center'>
                            <div>
                                <span className=" inline-block w-3 h-3 rounded-full bg-green-700"></span>
                            </div>
                            <div>
                                adasdsa
                            </div>
                        </div>
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    );
};

export default Test;