import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import PlaceIcon from "@mui/icons-material/Place";
import { useEffect, useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link, useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams("");
  console.log("id", id);

  const navigate = useNavigate("");

  const [getUserData, setUserData] = useState([]);
  console.log(getUserData);

  const getdata = async (e) => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 404 || !data) {
      console.log("error ");
    } else {
      setUserData(data);
    }
  };

  useEffect(() => {
    getdata();
  });

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      alert("error");
    } else {
      alert("user deleted!");
      navigate("/");
    }
  };

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Wellcome sumit!</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <Link to={`/edit/${getUserData._id}`}>
              <button className="btn btn-primary mx-2">
                <CreateIcon />
              </button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => deleteuser(getUserData._id)}
            >
              <DeleteIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/profile.png" style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">
                Name: <span>{getUserData.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>{getUserData.age}</span>
              </h3>
              <p className="mt-3">
                <MailOutlineIcon />
                Email: <span>{getUserData.email}</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation: <span>{getUserData.work}</span>
              </p>
            </div>

            <div className="right_view col-lg-6 col-md-6 col-12">
              <p>
                <MobileScreenShareIcon /> mobile:{" "}
                <span>{getUserData.number}</span>
              </p>
              <p>
                <PlaceIcon /> location: <span>{getUserData.add}</span>
              </p>
              <p>
                <DescriptionIcon />
                Description: <span>{getUserData.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
