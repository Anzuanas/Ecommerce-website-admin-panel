import "./productList.css";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  
  const products = useSelector((state) => state.product.products);


  const handleDelete = (id) => {
    deleteProduct(id,dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="" className="productListImage" />
            {params.row.title}
          </div>
        );
      },
    },

    {
      field: "inStock",
      headerName: "Stock",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">
                {" "}
                <Edit />{" "}
              </button>
            </Link>
            <button
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            >
              {" "}
              <Delete />{" "}
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productList">
        <DataGrid
          disableRowSelectionOnClick
          rows={products}
          columns={columns}
          getRowId={(row) => row._id}
          checkboxSelection
        />
      </div>
    </div>
  );
}