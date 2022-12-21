import styled from "styled-components";
import {Link} from 'react-router-dom'
import register from "./register";

const Header = styled.div`
width:100%;
height:4rem;
display:flex;
flex-direction: row;
background: white;
`

const MyA = styled(Link)`
text-decoration: none;
font-size:1.5rem;
background:transparent;
display:flex;

align-items: center;
margin: 0 2rem;
color: black;
`

const Navbar = () => {

return (
    <Header>
        <MyA to='/'>Home</MyA>
        <MyA to='/register'>Register</MyA>
        <MyA to='/login'>Login</MyA>


    </Header>

)

}
export default Navbar