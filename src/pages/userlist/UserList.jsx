import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function UserList() {
    const [data,setData]=useState(userRows);
    const handleDelete=(id)=>{
        setData(data.filter((item)=> item.id !==id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell:(params)=>{
            console.log('Row data:', params); // Log the row data
            return(
                <div className="userListUser">
                
                <img className="userListImg" src={params.data.avatar} alt="" />
                {params.data.username}

                </div>

            )
          }
          
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200 ,
          
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          
        },
        {
          field: 'transaction',
          headerName: 'Transaction volume',
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell: (params)=>{
                return(
                    <div className="editDelete">
                    <Link to={"/users/"+params.data.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                   
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.data.id)
                    
                    } />
                    </div>
                )
            }

        },
      ];
      
     
  return (
    <div className="userList">
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
