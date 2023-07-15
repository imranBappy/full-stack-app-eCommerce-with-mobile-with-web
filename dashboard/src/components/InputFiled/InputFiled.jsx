
const InputFiled = ({ handleInput, type, options, ...rest }) => {
    let content = null
    if (type == 'text') {
        content = <div className=' product_input'>
            <input required onChange={handleInput} {...rest} className=' product_input_filed' type="text" />
        </div>
    } else if (type == 'file') {
        content = <div className=' product_input'>
            <input required onChange={handleInput} {...rest} className=' product_input_filed ' type="file" />
        </div>
    } else if (type == 'select') {
        content = <div className="w-full" >
            <select onChange={handleInput} required {...rest} id="" className="w-full mb-2 bg-lite2 font-semibold text-black   outline-none px-4 py-2 dark:bg-dark1 dark:text-dark4 rounded " >
                {
                    options?.map((option) => <option key={option._id} value={option._id} >{option.name}</option>)
                }
            </select>
        </div>
    }


    return (
        content
    );
};

export default InputFiled;