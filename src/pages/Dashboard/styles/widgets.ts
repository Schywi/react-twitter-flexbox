import styled from 'styled-components';

export const Widgets = styled.aside`
  width: 290px;
  margin-top: 10px;
`;

export const Follow = styled.div`
  div.widget {
    background: #fff;
    padding: 15px;

    div.title {
      display: flex;
      align-items: baseline;
      strong {
        font-size: 18px;
        color: #1f2226;
      }
      /* link do refresh */
      a {
        color: #3bb9e3;
        font-size: 12px;
        text-decoration: none;
        position: relative;
        padding-left: 10px;

        /* bolinha do refresh */
        &::before {
          content: '';
          width: 2px;
          height: 2px;
          border-radius: 50%;
          margin-left: 5px;
          margin-right: 5px;
          background: #222;
          position: absolute;
          left: 1px;
          top: 6px;
        }
      }
    }
  }
`;

export const FollowList = styled.ul`
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
    a {
      color: #ccd6dd;
      text-decoration: none;
      font-size: 14px;
    }
    div.profile {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }
  }
`;

export const FollowInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    color: #1f2326;

    span {
      font-weight: normal;
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  button {
    height: 27px;
    background: #fff;
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    font-weight: bold;
    font-size: 14px;
    color: #3bb9e3;
    border: 1px solid #3bb9e3;
    border-radius: 16px;
  }
`;

export const Trends = styled.div`
  div.widget {
    margin-top: 15px;
    background: #fff;
    padding: 15px;

    div.title {
      display: flex;
      align-items: baseline;
      strong {
        font-size: 18px;
        color: #1f2226;
      }
      /* link do refresh */
      a {
        color: #3bb9e3;
        font-size: 12px;
        text-decoration: none;
        position: relative;
        padding-left: 10px;

        /* bolinha do refresh */
        &::before {
          content: '';
          width: 2px;
          height: 2px;
          border-radius: 50%;
          margin-left: 5px;
          margin-right: 5px;
          background: #222;
          position: absolute;
          left: 1px;
          top: 6px;
        }
      }
    }
    ul {
      margin-top: 10px;
      li {
        a {
          color: #3bb9e3;
          font-size: 14px;
          text-decoration: none;
          font-weight: bold;
          padding-left: 10px;
        }
      }
    }
  }
`;
