import { Link, useNavigate } from "react-router-dom";

const AuthLogin = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const logInfo = { email, password}

        fetch("http://localhost:8004/api/admin", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(logInfo),
          })
            .then((res) => res.json())
            .then((data) => {
                if(data.email){
                    alert("Authority has been successfully logged in");
                    navigate("/authhome");
                }
            });


    }

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now as a Authority!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/" className="btn btn-success">
              Back to Home
            </Link>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <Link to="/signup" className="text-center">
              Have not an account?{" "}
              <span className="text-green-700">Create New!</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;