import Footer from '../layouts/Footer';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Introduce from '../pages/Introduce';
import Post from '../pages/Post';
import Product from '../pages/Product';




const listRoute=[
    

        { path:'/' ,component:Home },
        { path:'/contact', component:Contact},
        { path:'/introduce', component:Introduce},
        { path:'/post', component:Post},
        { path:'/product', component:Product},
        { path:'/footer', component:Footer}  
    
]
export default listRoute;