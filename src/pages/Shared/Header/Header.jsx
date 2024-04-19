import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 mt-3'>
            <img className='' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('MMMM D YYYY')}</p>
        </div>
    );
};

export default Header;