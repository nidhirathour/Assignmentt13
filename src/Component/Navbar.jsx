import Button from "./Button"
import './navbar.css'

const Navabar =() =>{
    return(
        <div className="mainnavbar" >
            <div className="navwala" >
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Button  text = "Sign-Up"/>
                <Button text = "Register"/>
            </div>
        </div>
    )

}
export default Navabar