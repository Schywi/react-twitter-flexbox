import styled from 'styled-components';
import { shade } from 'polished';

export const Topbar = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  div.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 285px;
    height: 100%;

    /* Botão follow icone */
    div {
      display: flex;
      button {
        height: 34px;
        background: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 90px;
        font-weight: bold;
        font-size: 14px;
        color: #3bb9e3;
        border: 1px solid #3bb9e3;
        border-radius: 16px;

        margin-right: 20px;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.08, '#fff')};
        }
      }

      img {
      }
    }
  }
`;

// Estilização da Ul (tweets aos favoritos)
export const Toplist = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  /* Lista de tweets */
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    position: relative;

    &:first-child {
      strong {
        color: #3bb9e3;
      }
    }
    &:first-child::after {
      content: '';
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #3bb9e3;
    }
    span {
      color: #667580;
      font-size: 12px;
      font-weight: bold;
    }
    strong {
      color: #667580;
      font-size: 18px;
      font-weight: bold;
      margin-top: 2px;
    }
  }
`;
