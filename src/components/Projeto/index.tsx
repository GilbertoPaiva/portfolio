import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Props = {
  titulo: string
  descricao: string
  url: string
}

const Projeto = ({ titulo, descricao, url }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={url} target="_blank" rel="noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
