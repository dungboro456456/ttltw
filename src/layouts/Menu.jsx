import { BsPlus, BsTrash } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';
import  './Menu.css';

function Menu() {
    return (
     <div className="container mb-4">
         <div className="menu">
        <ul>
          <li>
            <button className="btn btn-primary"><BsPlus /> Thêm</button>
          </li>
          <li>
            <button className="btn btn-danger"><BsTrash /> Thùng Rác</button>
          </li>
        </ul>
      </div>
     </div>
    );
  }
  
  export default Menu;
  
