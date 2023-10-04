import { useParams } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Navbar from '../components/Shared/Navbar';
import RightSideNav from '../components/Shared/RightSideNav';

const NewsDetail = () => {
  const { newsId } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-12">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold">Dragon News</h2>
          <p>{newsId}</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
