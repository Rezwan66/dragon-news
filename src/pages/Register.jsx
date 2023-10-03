import { Link } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';

const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('email'));
    console.log(form.get('password'));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#F3F3F3] mt-10 md:w-3/4 lg:w-1/2 p-20 mx-auto rounded-md">
        <h2 className="text-4xl font-semibold text-center">
          Register your account
        </h2>
        <hr className="my-6" />
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your profile photo link"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
            <label className="label justify-start gap-2 mt-2">
              <input
                type="checkbox"
                className="checkbox checkbox-neutral"
                name=""
                id=""
              />{' '}
              <span>Accept Term & Conditions</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral bg-[#403F3F] text-white capitalize">
              Register
            </button>
          </div>
          <label className="label mt-6">
            <span className="mx-auto text-[#706F6F] font-semibold">
              Already Have An Account ?{' '}
              <Link className="text-[#F75B5F]" to="/login">
                Login
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
