import styled from 'styled-components';

export const Timeline = styled.section`
  flex: 1;
  margin: 10px 20px;
  background: #fff;

  nav {
    border-bottom: 1px solid #ccd6dd;
    padding: 10px 20px;

    a {
      cursor: pointer;
      color: #3bb9e3;
      font-weight: bold;
      font-size: 18px;
      margin-left: 20px;

      &:first-child {
        margin: 0;
        color: #1f2326;
      }
    }
  }
`;

export const TimeList = styled.ul`
  margin-top: 10px;

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccd6dd;
    padding-bottom: 10px;
    margin-bottom: 10px;

    &:last-child {
      border-bottom: 0px;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }

    div.profile {
      display: flex;
      align-items: flex-start;

      img.avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-left: 10px;
        flex-shrink: 0;
      }
    }
  }
`;

export const TimeInfo = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;

  strong {
    font-size: 14px;
    color: #1f2326;
    margin-bottom: 5px;

    span {
      font-weight: normal;
      font-size: 13px;
      color: #9a9a9a;
    }
  }

  p {
    color: #1f2326;
    margin-right: 10px;
    font-size: 14px;
  }

  div.icons {
    margin-top: 20px;
    display: flex;

    a {
      display: flex;
      align-items: center;
      margin-left: 30px;
      color: #667580;
      font-weight: bold;
      font-size: 12px;

      &:first-child {
        margin: 0;
      }

      img {
        margin-right: 5px;
      }
    }
  }
`;
