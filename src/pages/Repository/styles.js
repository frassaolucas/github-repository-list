import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.div`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background-color: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  button {
    max-width: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    color: #7159c1;
    border-color: #7159c1;
    border-radius: 4px;
    font-weight: bold;
    transition: color 0.2s, background-color 0.2s;

    & + button {
      margin-left: 10px;
    }

    &:hover {
      background-color: #7159c1;
      color: #fff;
    }

    &:nth-child(${(props) => props.active + 1}) {
      background-color: #7159c1;
      color: #fff;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  color: #999;
  font-size: 12px;

  button {
    max-width: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-color: #7159c1;
    border-radius: 4px;
    color: #7159c1;
    transition: opacity 0.2s, color 0.2s, background-color 0.2s;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;

      &:hover {
        background-color: unset;
        color: #7159c1;
      }
    }

    &:hover {
      background-color: #7159c1;
      color: #fff;
    }
  }
`;
