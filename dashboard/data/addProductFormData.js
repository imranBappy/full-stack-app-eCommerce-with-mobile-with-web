const addProductFormData = [
    {
        label: "Product Thumbnail",
        placeHolder: "Product Thumbnail",
        type: "img",
        name: "thumbnail",
    },
    {
        label: "Name",
        placeHolder: "Name",
        type: "text",
        name: "name",
    },
    {
        label: "Price",
        placeHolder: "Price",
        type: "text",
        name: "price",
    },
    {
        label: "Stock",
        placeHolder: "Stock",
        type: "text",
        name: "stock",
    },
    {
        label: "Select Category",
        type: 'select',
        name: "category",
        placeholder: 'Category',
        options: []
    },
    {
        label: "Select Brand",
        type: 'select',
        name: "brand",
        placeholder: 'Brand',
        options: []
    }
]


export default addProductFormData;