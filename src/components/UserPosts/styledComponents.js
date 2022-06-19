import styled from 'styled-components'

export const UserPostsContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  margin: 10px 0px 40px 0px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin: auto;
  }
  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`
