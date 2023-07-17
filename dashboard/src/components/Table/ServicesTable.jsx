import { BiSearch } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { toast } from "react-toastify";

const ServicesTable = ({ data }) => {

    return (
        <div className='theme_component mt-5 pt-5 w-full  '>
            <div className=" flex  flex-wrap gap-4 justify-between mx-5 py-4 ">
                <div>
                    <select value={'All'} name="" id="" className="bg-lite2 font-semibold text-black   outline-none px-4 py-2 dark:bg-dark1 dark:text-dark4 rounded " >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Complated">Complated</option>
                        <option value="Canceled">Canceled</option>
                    </select>
                </div>
                <div >
                    <div className=' px-4 gap-2  flex items-center dark:bg-dark1 dark:text-dark4'>
                        <BiSearch />
                        <input className=' outline-none py-2 dark:bg-dark1   dark:text-dark4' placeholder="Enter the text..." type="text" />
                    </div>
                </div>
            </div>
            <div className=' xl:overflow-hidden overflow-x-scroll' >
                <table className=" w-full  text-black dark:text-dark4">
                    <thead>
                        <tr className=" text-left bg-primary2 ">
                            <th className=" pl-6 py-4 min-w-[55px]">#</th>
                            <th className=" py-5  min-w-[75px]">ID</th>
                            <th className=" py-5  min-w-[250px] ">Name</th>
                            <th className=" py-5 min-w-[120px]  ">Date</th>
                            <th className=" py-5  min-w-[55px] ">Items</th>
                            <th className=" py-5  min-w-[55px] ">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((dt, i) => {
                                const { _id, name, products, createdAt, thumbnail } = dt || {};
                                const date = new Date(createdAt);
                                return <tr key={_id} className=" hover:bg-lite5" style={{ borderBottom: "1px solid rgb(22, 119, 255, 0.2)", borderStyle: " dotted" }} >
                                    <td className="pl-6 py-4"> <input type="checkbox" className="" name="" id="" /> </td>
                                    <td>#{i}</td>
                                    <td>
                                        <div className=' flex flex-col '>
                                            <div className='  font-semibold flex  items-center'>
                                                <img className=' p-1 h-10  w-10  mr-2' src={thumbnail} alt="" />
                                                <span>
                                                    {name}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {products.length}
                                    </td>
                                    <td>
                                        <div className=' flex flex-col'>
                                            <div className=' font-semibold'>
                                                {date.toLocaleDateString()}
                                            </div>
                                            <div className=' font-thin'>
                                                {date.toLocaleTimeString()}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button

                                            className=' w-20  border-2 border-primary rounded px-2 py-1 text-primary '>
                                            Edit
                                        </button>
                                        <button
                                            className='w-20 border-2 border-red-500 rounded px-2 py-1 text-red-500 ml-2'
                                        >
                                            {'Delete'}
                                        </button>
                                    </td>
                                </tr>
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='flex justify-between dark:bg-dark2  mx-5 py-5 dark:text-dark4'>
                <div>
                    Page : {10}
                </div>
                <div>
                    <div className='flex  items-center text-xl gap-5'>
                        <span onClick={() => { }} className='icon_btn'>
                            <IoIosArrowBack />
                        </span>
                        <span onClick={() => { }} className='icon_btn'>
                            <IoIosArrowForward />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesTable;