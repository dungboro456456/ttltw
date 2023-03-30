import { BsInfoCircle, BsPlus, BsTrash } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import  './Menu.css';

function Menu() {
    return (
     <div className="container">
         <div className="menu">
        <ul>
          <li>
          <Link to={`/create`} className="btn btn-success m-2 ">
                    <RiEdit2Fill />Thêm
                    </Link>          </li>
         
        </ul>
      </div>
     </div>
    );
  }
  
  export default Menu;
  
