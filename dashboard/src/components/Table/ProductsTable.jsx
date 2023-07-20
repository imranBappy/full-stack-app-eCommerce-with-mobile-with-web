import { BiSearch } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../../features/product/productApi';
import Loading from '../ui/Loading';

import ProductItem from '../ProductItem/ProductItem';
const ProductTable = () => {
    const { page } = useSelector((state) => state.pagination);
    const { data = {}, isLoading: dataLoading } = useGetProductsQuery({});

    const { products } = data || {};


    const handleStatus = () => { }
    const handlePage = () => { }

    console.log({ data });
    return (
        <div className='theme_component mt-5 py-5 w-full  '>
            {
                dataLoading ? <Loading /> :

                    <>
                        <div className=" flex  flex-wrap gap-4 justify-between mx-5 py-4 ">
                            <div>
                                <select value={'status'} onChange={handleStatus} name="" id="" className="bg-lite2 font-semibold text-black   outline-none px-4 py-2 dark:bg-dark1 dark:text-dark4 rounded " >
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
                                        <th className=" py-5  min-w-[250px] ">Name</th>

                                        <th className=" py-5 min-w-[120px]  ">Date</th>
                                        <th className=" py-5  min-w-[55px] ">Stock</th>
                                        <th className=" py-5  min-w-[70px] ">Price</th>
                                        <th className=" py-5   min-w-[100px]">brand</th>
                                        <th className=" py-5   min-w-[100px]">Category</th>
                                        <th className=" py-5   min-w-[100px]">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products?.map((prod) => {
                                            return <ProductItem key={prod._id} prod={prod} />
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='flex justify-between dark:bg-dark2  mx-5 py-5 dark:text-dark4'>
                            <div>
                                Page : {page}
                            </div>
                            <div>
                                <div className='flex  items-center text-xl gap-5'>
                                    <span onClick={() => handlePage(page - 1)} className='icon_btn'>
                                        <IoIosArrowBack />
                                    </span>
                                    <span onClick={() => handlePage(page + 1)} className='icon_btn'>
                                        <IoIosArrowForward />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default ProductTable;