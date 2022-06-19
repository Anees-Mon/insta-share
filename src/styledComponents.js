import styled from 'styled-components'

export const ThemeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
  * {
    color: ${props => props.dark && '#ffffff'};
  }
`
