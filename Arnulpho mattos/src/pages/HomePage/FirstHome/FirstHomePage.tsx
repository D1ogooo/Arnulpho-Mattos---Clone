import Header from '../../../components/Header/HeaderComponent'
import { ImagemPrincipal, ProximaSection } from './FirstHomeStyle'

function FirstHome() {
  return (
   <>
    <ImagemPrincipal> 
     <Header/>
     </ImagemPrincipal>
     <ProximaSection>
      <h1>"Nossos recursos humanos são o que temos de melhor."</h1>
     </ProximaSection>
   </>
  )
}

export default FirstHome