import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate("");
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    age: "",
    number: "",
    work: "",
    add: "",
    desc: "",
  });

  const setData = (el) => {
    console.log(el.target.value);
    const { name, value } = el.target;
    setInpVal((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const { name, email, age, number, work, add, desc } = inpVal;
    const res = await axios.post(
      `https://backend-curd-mern.onrender.com/api/v1/user/register`,
      JSON.stringify({ name, email, age, number, work, add, desc }),
      {
        headers: {  
          "Content-Type": "application/json", // Explicitly set the Content-Type
        },
      }
    );
    const data = await res.data;
    // console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error ");
    } else {
      alert("data added");
      console.log("data added");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <form className="mt-5">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpVal.name}
              onChange={setData}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              value={inpVal.email}
              name="email"
              class="form-control"
              onChange={setData}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              age
            </label>
            <input
              type="text"
              name="age"
              value={inpVal.age}
              class="form-control"
              onChange={setData}
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile No.
            </label>
            <input
              type="number"
              name="number"
              value={inpVal.number}
              class="form-control"
              onChange={setData}
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work
            </label>
            <input
              type="text"
              name="work"
              value={inpVal.work}
              class="form-control"
              onChange={setData}
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text"
              name="add"
              value={inpVal.add}
              class="form-control"
              onChange={setData}
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Discription
            </label>
            <textarea
              name="desc"
              value={inpVal.desc}
              onChange={setData}
              className="form-control"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
