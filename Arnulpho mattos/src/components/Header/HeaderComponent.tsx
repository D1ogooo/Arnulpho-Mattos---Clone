import { PaiContainer, SimbolImage, HeaderNav } from './HeaderStyle'
import HeaderImage from '../../assets/Simbolo arnulpho mattos.svg'
import { Link } from "react-router-dom";

function Header(){
 return (
  <>
   <PaiContainer>
    <SimbolImage>
     <img src={HeaderImage}/>
      <a href="#">EEEM Arnulpho Mattos</a>
    </SimbolImage>

    <HeaderNav>
      <Link to="/">Página inicial</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/projeto">Página do projeto</Link>
    </HeaderNav>
   </PaiContainer>
  </>
 )
}

export default Header