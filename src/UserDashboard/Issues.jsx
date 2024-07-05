// import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const Issues = () => {
        // const navigate = useNavigate();

        useEffect(() =>{
            fetch("http://localhost:8004/api/admin", {
                method: "GET",
                headers: {
                  "content-type": "application/json",
                }
               
              })
                .then((res) => res.json())
                .then((data) => console.log(data));

        },[])
    const handleReport = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const description = form.des.value;
        const latitude = form.lat.value;
        const longitude = form.long.value;

        const reportInfo = { email, photo, category, description, latitude, longitude}

        fetch("http://localhost:8004/api/admin", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(reportInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        
    }

    // {
    //     if(data.email){
    //         alert("Your report has been successfully created.");
    //         navigate("/userhome");
    //     }
    // }

  return (
    <div>
      <>
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleReport} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Link</span>
                </label>
                <input
                  type="text"
                  placeholder="photo Link"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  className="input input-bordered w-full appearance-none "
                  required
                >
                  <option value="" disabled selected>
                    Select category
                  </option>
                  <option value="category1">Road</option>
                  <option value="category2">Electricity</option>
                  <option value="category3">Others</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="des"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Latitude</span>
                </label>
                <input
                  type="text"
                  placeholder="Latitude"
                  name="lat"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Longitude</span>
                </label>
                <input
                  type="text"
                  placeholder="Longitude"
                  name="long"
                  className="input input-bordered"
                  required
                />
              </div>
           
              
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit Report"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Issues;
