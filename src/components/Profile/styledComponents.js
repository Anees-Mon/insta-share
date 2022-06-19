import styled from 'styled-components'

export const UpContainer = styled.div`
  margin-top: 15px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 85%;
    margin: auto;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`
export const UpHeader = styled.div`
  width: 85%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const UpAvatarLg = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 180px;
    border-radius: 100%;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-right: 50px;
  }
`
export const UpName = styled.h1`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;
  color: #262626;
  margin: 0px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`
export const UpAvatarCountsContainer = styled.div`
  display: flex;
  align-items: center;
}
`
export const UpAvatarSm = styled.img`
  width: 95px;
  border-radius: 100%;
  margin-right: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const UpCountsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    width: 350px;
  }
`
export const UpCountItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const UpCountValue = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #262626;
  margin: 0px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 5px;
  }
`
export const UpCountLabel = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  color: #262626;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const UpUsername = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  color: #262626;
  margin: 0px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
`
export const UpBio = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  color: #262626;
  margin: 0px;
  line-height: 24px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const UpStoriesContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`
export const UpStoryItem = styled.li`
  width: 65px;
  height: 65px;
  border: 1px solid #c7c7cc;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 85px;
    height: 85px;
    margin-right: 30px;
    margin-bottom: 15 px;
  }
`
export const UpStoryImage = styled.img`
  width: 100%;
  border-radius: 100%;
  padding: 3px;
}
`
export const UpHorizontalRule = styled.hr`
  border: 1px solid #c6c6c8;
  border-top: 0px;
  margin: 0px;
  margin-bottom: 0px;
}
`
export const UpTab = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const UpTabLabel = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #262626;
  margin: 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin: 30px 0px;
  }
`

export const UpInfoContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
`

export const UpPostsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
`
export const UpPostContainer = styled.li`
  width: 32.5%;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 32%;
    margin-bottom: 20px;
  }
`
export const UpPostImage = styled.img`
  width: 100%;
  height: 100%;
`
export const UpNoPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  @media screen and (min-width: 1024px) {
    height: 40vh;
  }
`
export const UpNoPostsIconContainer = styled.div`
  border: 1px solid #262626;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (min-width: 1024px) {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
`

export const UpNoPostsMessage = styled.h1`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 18px;
  color: #262626;
  margin: 0px;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`
