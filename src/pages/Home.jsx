import Header from '../components/Shared/Header';
import Navbar from '../components/Shared/Navbar';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-3xl">This is the homepage</h2>
    </div>
  );
};

export default Home;
