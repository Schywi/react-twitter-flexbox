import styled from 'styled-components';
import banner from '../../../assets/banner.jpg';

// banner da aplicação

export const Banner = styled.div`
  height: 380px;
  width: 100%;
  background: #3bb9e3 url(${banner}) center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  h1 {
    color: #fff;
    font-family: Roboto;
  }
`;
