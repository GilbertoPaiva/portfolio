import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || '12px'};
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.principal ? 'darkblue' : 'darkgray')};
  }
`

const BotaoPerigo = styled(Botao)`
  background-color: red;

  &:hover {
    background-color: darkred;
  }

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Click me</Botao>
      <Botao fontSize="14px" principal={false}>
        Secondario
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
