import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';

function Home() {
  const [getUserData, setUserData] = useState([]);
  
  const getdata = async (e) => {
    const res = await axios.get(`https://backend-curd-mern.onrender.com/api/v1/user/getdata`);
    const data = await res.data;
    if (res.status === 404 || !data) {
      console.log("error ");
    } else {
      setUserData(data);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async(id)=> {
    const res2 = await axios.delete(`https://backend-curd-mern.onrender.com/api/v1/user/deleteuser/${id}`);
    const deletedata = await res2.data;
    console.log(deletedata);
    
    if (res2.status === 422 || !deletedata) {
      alert("error");
    } else {
      alert("user deleted!");
      getdata()
    }
  }

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-3">
          <Link to="/register">
            <button className="btn btn-primary">Add Data</button>
          </Link>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
              <th scope="col">job</th>
              <th scope="col">number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-secondary">
            {getUserData.map((el, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{el?.name || "new"}</td>
                    <td>{el?.email || "email"}</td>
                    <td>{el?.work || "webDev"}</td>
                    <td>{el?.number || 1212121212}</td>
                    <td className="d-flex justify-content-between">
                      <Link to={`/view/${el._id}`}>
                      <button className="btn btn-success">
                        <VisibilityIcon />
                      </button>
                      </Link>
                      
                      <Link to={`/edit/${el._id}`}> 
                      <button className="btn btn-primary">
                        <CreateIcon />
                      </button>
                      </Link>
                      <button className="btn btn-danger" onClick={()=> deleteuser(el._id)}>
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
