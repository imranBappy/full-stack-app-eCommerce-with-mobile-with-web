import { useEffect } from 'react';
import { useDeleteProductMutation } from '../../features/product/productApi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductItem = ({ prod }) => {
    const { name, price, stock, brand, thumbnail, category, createdAt, _id } = prod || {};
    const date = new Date(createdAt);
    const [deleteProduct, { isLoading, status }] = useDeleteProductMutation();
    useEffect(() => {
        if (status === 'fulfilled') {
            toast.success("Prodcut successfully deleted!");
        } else if (status === 'rejected') {
            toast.error("There was an error!")
        }
    }, [status])

    const handleDelete = (id) => {
        const isConfirm = confirm('Are you sure to delete this product?');
        console.log(isConfirm);
        if (isConfirm) {
            deleteProduct(id)
        }
    }
    return (
        <tr key={_id} className=" hover:bg-lite5" style={{ borderBottom: "1px solid rgb(22, 119, 255, 0.2)", borderStyle: " dotted" }} >
            <td className="pl-6 py-4"> <input type="checkbox" className="" name="" id="" /> </td>
            <td>
                <div className=' flex flex-col '>
                    <div className='  font-semibold flex  items-center'>
                        <img className=' p-1 h-8   mr-2' src={thumbnail} alt="" />
                        <span>
                            {name}
                        </span>
                    </div>
                </div>
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
            <td>{stock}</td>
            <td>৳{price}</td>
            <td>{category.name}</td>
            <td>{brand.name}</td>
            <td>
                <Link to={`/${_id}`}>
                    <button
                        disabled={isLoading}
                        className=' w-20  border-2 border-primary rounded px-2 py-1 text-primary '>
                        Edit
                    </button>
                </Link>
                <button
                    disabled={isLoading}
                    onClick={() => handleDelete(_id)}
                    className='w-20 border-2 border-red-500 rounded px-2 py-1 text-red-500 ml-2'
                >
                    {isLoading ? 'Deleting...' : 'Delete'}
                </button>
            </td>

        </tr>
    );
};

export default ProductItem;