import styled from 'styled-components'
import { Theme } from '../../themes/dark'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
