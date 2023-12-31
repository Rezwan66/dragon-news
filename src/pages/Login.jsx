import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    // reset the form
    e.currentTarget.reset();
    loginUser(email, password)
      .then(res => {
        console.log(res.user);
        toast.success('Signed In Successfully');
        navigate(location?.state ? location.state : '/');
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="mt-6">
      <Navbar></Navbar>
      <div className="bg-[#F3F3F3] mt-24 md:w-3/4 lg:w-1/2 p-20 mx-auto rounded-md">
        <h2 className="text-4xl font-semibold text-center">Please Login</h2>
        <hr className="my-6" />
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
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
            <button className="btn btn-neutral bg-[#403F3F] text-white capitalize">
              Login
            </button>
          </div>
          <label className="label mt-6">
            <span className="mx-auto text-[#706F6F] font-semibold">
              Dont’t Have An Account ?{' '}
              <Link className="text-[#F75B5F]" to="/register">
                Register
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
