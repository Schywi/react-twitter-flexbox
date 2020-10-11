import styled from 'styled-components';

export const Profile = styled.aside`
  width: 260px;
`;

// container do profile
export const Info = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-top: -130px;
  }
  h1 {
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }
  span {
    font-size: 14px;
    color: #53626c;
  }
  p {
    font-size: 14px;
    color: #1f2226;
    margin-top: 15px;
  }
`;

// Lista de informações do usuario
export const InfoList = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #657786;
    margin-top: 5px;

    a {
      font-size: inherit;
      color: inherit;
    }
    &:first-child {
      margin: 0;
    }
    img {
      margin-right: 10px;
    }
  }
`;

// caixa de seguidores
export const Followers = styled.div`
  margin-top: 20px;
  strong {
    font-weight: normal;
    color: #3bb9e3;
    font-size: 14px;
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      width: 48px;
      height: 48px;
      background: #d0d5d9;
      border-radius: 50%;
      margin: 5px 2px 10px;
      flex: 1 0 auto;
    }
  }
`;

// caixa de fotos
export const Photos = styled.div`
  margin-top: 20px;
  strong {
    font-weight: normal;
    color: #3bb9e3;
    font-size: 14px;
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      background: #d0d5d9;
      flex: 1 0 auto;
      margin: 5px 2px 5px;
    }
  }
`;
