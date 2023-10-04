import { FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeMiddleCard = ({ n }) => {
  const { _id, author, title, image_url, details, rating, total_view } = n;
  return (
    <div>
      <div className="rounded overflow-hidden border bg-white">
        <div className="w-full flex justify-between p-3 items-center bg-[#F3F3F3]">
          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img src={author?.img} alt="profilepic" />
            </div>
            <span className="pt-1 ml-2 font-semibold">
              {author.name ? author.name : 'Anonymous'}
              <p className="text-sm font-normal">{author?.published_date}</p>
            </span>
          </div>
          <span className="px-2 flex items-center gap-2">
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </span>
        </div>
        {/* card body */}
        <div className="px-5 space-y-4">
          <h2 className="text-xl font-bold mt-4">{title}</h2>
          <img className="w-full bg-cover" src={image_url} />
          <div>
            {details.length > 200 ? (
              <p className="mb-4">
                {details.slice(0, 200)}{' '}
                <Link to={`/news/${_id}`} className="text-[#FF8C47]">
                  ...read more
                </Link>
              </p>
            ) : (
              <p className="mb-4">{details}</p>
            )}
            <hr />
            <div className="flex justify-between my-4">
              <span>{rating?.number}</span>
              <span className="flex items-center gap-2">
                <FaEye></FaEye>
                {total_view}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeMiddleCard.propTypes = {
  n: PropTypes.object,
};

export default HomeMiddleCard;
