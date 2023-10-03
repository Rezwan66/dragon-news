import { useLoaderData } from 'react-router-dom';
import BreakingNews from '../components/Shared/BreakingNews';
import Header from '../components/Shared/Header';
import LeftSideNav from '../components/Shared/LeftSideNav';
import Navbar from '../components/Shared/Navbar';
import RightSideNav from '../components/Shared/RightSideNav';
import HomeMiddleCard from '../components/Shared/HomeMiddlePanel';

const Home = () => {
  const news = useLoaderData();
  //   console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">Dragon News Home</h2>
          <div className="space-y-6">
            {news.map((n, idx) => (
              <HomeMiddleCard key={idx} n={n}></HomeMiddleCard>
            ))}
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
