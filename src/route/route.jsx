import Create from '../layouts/Create';
import Detail from '../layouts/Detail';
import Edit from '../layouts/Edit';
import Footer from '../layouts/Footer';
import List from '../layouts/List';
import Trash from '../layouts/Trash';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Introduce from '../pages/Introduce';
import Post from '../pages/Post';
import Product from '../pages/Product';




const listRoute=[
        { path:'/' ,component:Home },
        { path:'/contact', component:Contact},
        { path:'/list', component:List},
        { path:'/create', component:Create},
        { path:'/edit', component:Edit},
        { path:'/detail', component:Detail},
        { path:'/trash', component:Trash},
        { path:'/introduce', component:Introduce},
        { path:'/post', component:Post},
        { path:'/product', component:Product},
        { path:'/footer', component:Footer}  
    
]
export default listRoute;