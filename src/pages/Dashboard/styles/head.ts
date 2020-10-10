import styled from 'styled-components';
import { shade } from 'polished';

import image from '../../../assets/search.svg';

// Header da aplicação
export const Header = styled.header`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  div.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    div {
      display: flex;

      input {
        width: 220px;
        border: 1px solid #e6ecf0;
        height: 34px;
        padding: 0 30px 0 12px;
        border-radius: 16px;
        color: #667581;
        font-size: 12px;
        font-weight: bold;
        background: #f5f8fa url(${image}) no-repeat 190px center;
      }

      img {
        height: 34px;
        width: 35px;
        border-radius: 50%;
        margin: 0 15px;
      }
      button {
        height: 34px;
        background: #3bb9e3;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 90px;
        font-weight: bold;
        font-size: 14px;
        color: #fff;
        border: 0;
        border-radius: 16px;
        transition: background-color 0.2s;
        &:hover {
          background: ${shade(0.2, '#3bb9e3')};
        }
      }
    }
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #667588;
      font-weight: bold;
      margin-left: 25px;
      cursor: pointer;
      /* Não gostei do home ficar agarrado no canto */
      &:first-child {
        margin: 0;
      }

      img {
        margin-right: 7px;
      }
    }
  }
`;
