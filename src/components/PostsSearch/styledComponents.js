import styled from 'styled-components'

export const PostsSearchTitle = styled.h1`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 24px;
    color: #262626;
    width: 85%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1024px) {
    width: 70vw;
  }
`

export const PostsSearchInitialImage = styled.img`
  width: 60px;
  @media screen and (min-width: 1024px) {
    width: 80px;
  }
`

export const PostsSearchInitialMessage = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  color: #989898;
  text-align: center;
  max-width: 300px;
  @media screen and (min-width: 768px) {
    max-width: none;
  }
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`

export const PostsSearchErrorMessage = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #262626;
  margin: 0px;
  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`

export const PostsSearchErrorDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: #989898;
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`

export const SearchResultsContainer = styled.ul`
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
    box-shadow: 0px 4px 16px rgba(7, 7, 7, 0.1);

    border-radius: 16px;
    padding: 30px;
    padding-bottom: 0px;
  }
  @media screen and (min-width: 1024px) {
    width: 70%;
    width: 70vw;
  }
`
