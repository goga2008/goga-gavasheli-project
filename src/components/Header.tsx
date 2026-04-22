import { NavLink } from "react-router-dom";
function Header(){
    return(
     <div className="bg-red  ">
      <div className="logo-container">
         <img src="/public/logo.avif" alt="Logo" className="logo" width={100} height={100}/> 
         
         <h1> ონლაინ მაღაზია-oniom</h1>
      </div>

      
        <header >
            <h2>გვერდითი მაღაზია</h2>
            <nav>
                <NavLink to= "/" >მთავარი</NavLink>
                <NavLink to ="/cart" >კალათა</NavLink>
                <NavLink to= "/login" >შესვლა</NavLink>
                <NavLink to= "/regist" >რეგისტრაცია</NavLink>
            </nav>
        </header>
       </div>


    )
}
export default Header