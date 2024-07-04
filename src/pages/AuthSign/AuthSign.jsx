import { Link, useNavigate } from "react-router-dom";

const AuthSign = () => {

    const navigation  = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullname.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,username,email, password);
    
        const userInfo = { name, username, email, password };
    
        fetch("http://localhost:8004/api/admin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.email){
                alert("Authority has been successfully created");
 
               navigation("/authlogin")
            }
          });
      };
  return (
    <>
      <div>
        <Link to="/" className="btn btn-success">
          Home
        </Link>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up as an Authority here!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="EX- Md Azad Hossain"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="EX-azad123"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="EX- example.gmail.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <Link to="/login" className="text-center">
              Already have an account?{" "}
              <span className="text-green-700">Login!</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSign;