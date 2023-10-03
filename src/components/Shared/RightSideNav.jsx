import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      {/* login with */}
      <div className="space-y-3 mb-8">
        <h2 className="text-xl font-bold">Login With</h2>

        <button className="btn btn-outline btn-info w-full text-base normal-case">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline btn-neutral w-full text-base normal-case">
          <FaGithub></FaGithub>
          Login with GitHub
        </button>
      </div>
      {/* socials */}
      <div className=" mb-6">
        <h2 className="text-xl font-semibold mb-3">Find Us On</h2>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-2 text-[#3B599C]"></FaFacebook> Facebook
        </a>
        <a className="p-4 flex items-center text-lg border-x" href="">
          <FaTwitter className="mr-2 text-[#58A7DE]"></FaTwitter> Twitter
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2 text-[#D82D7E]"></FaInstagram> Instagram
        </a>
      </div>
      {/* Q-zone */}
      <div className="p-4 space-y-3 mb-5 bg-[#F3F3F3]">
        <h2 className="text-xl font-semibold">Q-Zone</h2>
        <img src={qZone1} alt="swimming" />
        <img src={qZone2} alt="class" />
        <img src={qZone3} alt="playground" />
      </div>
      {/* ad */}
      <div className="p-10 mb-5 bg-[url('https://i.ibb.co/RzWcvZ1/bg.png')] text-white text-center">
        <h2 className="text-3xl font-bold mb-5 mt-10">
          Create an Amazing Newspaper
        </h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <a
          className="btn btn-secondary bg-[#D72050] text-white rounded-none mt-8 mb-10"
          href=""
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default RightSideNav;
