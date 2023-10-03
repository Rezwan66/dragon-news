import BreakingNews from '../components/Shared/BreakingNews';
import Header from '../components/Shared/Header';
import LeftSideNav from '../components/Shared/LeftSideNav';
import Navbar from '../components/Shared/Navbar';
import RightSideNav from '../components/Shared/RightSideNav';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News coming soon...</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
