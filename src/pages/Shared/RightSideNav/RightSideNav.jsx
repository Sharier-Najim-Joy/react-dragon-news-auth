import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="p-2 space-y-2 mb-4">
                <h2 className="text-xl">Login With</h2>
                <button className="flex btn w-full">
                    <FaGoogle className=" text-blue-400"></FaGoogle>
                    Login With Google
                </button>
                <button className="flex btn w-full">
                    <FaGithub ></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-2 mb-4">
                <h2 className="text-xl mb-4">Find Us On</h2>
                <a href="" className="text-xl flex items-center border rounded-t-lg p-4">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className="text-xl flex items-center border-x p-4">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className="text-xl flex items-center border rounded-b-lg p-4">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-2 mb-4">
                <h2 className="text-xl">Login With</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;