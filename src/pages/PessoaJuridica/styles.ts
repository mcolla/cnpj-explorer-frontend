import styled from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color:#333;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size:48px;
  color: #3a3a3a;

  margin-top: 40px;
`;

export const PJInfo = styled.section`
  margin-top: 50px;
  font-size:48px;
  color: #3a3a3a;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 30px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }

    }

  }
`;

export const PJDetalhes = styled.div`
  margin-top: 40px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 10px;
    }

    div {
      margin-left: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
    }
  }
`;

export const Hr = styled.hr`
  color: #3a3a3a;

  margin-top: 10px;
`;

export const Error = styled.span`
  color: #c53030;
  display: block;
  margin-top: 10px;
`;
