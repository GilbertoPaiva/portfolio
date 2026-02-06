import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <SidebarContainer>
    <aside>
      <Avatar />
      <Titulo fontSize={20}>Gilberto Paiva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        GilbertoPaiva
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor de Software
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </aside>
  </SidebarContainer>
)

export default Sidebar
