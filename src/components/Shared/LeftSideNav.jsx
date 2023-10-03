import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import { FaCalendar } from 'react-icons/fa';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">All Category</h2>
      <div className="text-center p-4 text-xl font-semibold bg-[#E7E7E7] rounded-md">
        National News
      </div>
      <div className="ml-14 mt-7 space-y-7">
        {categories.map(category => (
          <NavLink
            to={`/category/${category.id}`}
            className="block text-xl font-medium text-[#9F9F9F]"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-8">
        <div className="">
          <figure>
            <img className="rounded-md" src={image1} alt="" />
          </figure>
          <div className="p-2">
            <h2 className="card-title mb-5">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="card-actions items-center gap-5">
              <p>Sports</p>
              <span className="flex items-center gap-2">
                <FaCalendar></FaCalendar> <p>Jan 4, 2022</p>
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <figure>
            <img className="rounded-md" src={image2} alt="" />
          </figure>
          <div className="p-2">
            <h2 className="card-title mb-5">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="card-actions items-center gap-5">
              <p>Sports</p>
              <span className="flex items-center gap-2">
                <FaCalendar></FaCalendar> <p>Jan 4, 2022</p>
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <figure>
            <img className="rounded-md" src={image3} alt="" />
          </figure>
          <div className="p-2">
            <h2 className="card-title mb-5">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="card-actions items-center gap-5">
              <p>Sports</p>
              <span className="flex items-center gap-2">
                <FaCalendar></FaCalendar> <p>Jan 4, 2022</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
