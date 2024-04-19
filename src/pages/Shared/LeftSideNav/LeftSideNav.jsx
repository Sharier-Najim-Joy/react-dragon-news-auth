import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div className="space-y-3">
            <h2 className="text-2xl">National News </h2>
            {
                categories.map(category=> <Link 
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block px-8"
                    >
                        {
                            category.name
                        }
                    </Link>)
            }
        </div>
    );
};

export default LeftSideNav;