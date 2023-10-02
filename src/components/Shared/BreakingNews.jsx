import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className="flex p-4 bg-[#F3F3F3] mb-5">
      <button className="btn btn-error bg-[#D72050] text-white capitalize rounded-none">
        Breaking News
      </button>
      <Marquee pauseOnHover={true} speed={150}>
        <Link className="mr-12 text-lg font-semibold" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12 text-lg font-semibold" to="/">
          I can be a React component, multiple React components......
        </Link>
        <Link className="mr-12 text-lg font-semibold" to="/">
          I can be a React component, multiple React components......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
