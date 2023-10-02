import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center mt-12">
      <img className="mx-auto mb-5" src={logo} alt="" />
      <h3 className="text-lg mb-2">Journalism Without Fear or Favour</h3>
      <h3 className="text-xl mb-7 font-medium">
        {moment().format('dddd, MMMM D, YYYY')}
      </h3>
    </div>
  );
};

export default Header;
