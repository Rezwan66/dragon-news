import { Link } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';

const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('email'));
    console.log(form.get('password'));
  };

  return (
    <div className="mt-10">
      <Navbar></Navbar>
      <form
        onSubmit={handleLogin}
        className="bg-[#F3F3F3] mt-24 md:w-3/4 lg:w-1/2 p-24 mx-auto rounded-md"
      >
        <h2 className="text-4xl font-semibold text-center">Please Login</h2>
        <hr className="my-6" />
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
  );
};

export default Login;
