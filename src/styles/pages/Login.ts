import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('/login/bg.jpg');
  background-repeat: no-repeat;
  background-position: 44% 50%;
  background-size: cover;

  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    padding: 0 16px;
  }

  form {
    margin-top: 50px;

    > div:not(:first-child) {
      margin: 16px 0 8px;
    }

    button {
      font-family: Heebo;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      height: 36px;
      min-width: 85px;

      border-radius: 44px;

      color: ${({ theme: { colors } }) => colors.purple};
    }
  }

  @media (min-width: ${({ theme: { sizes } }) => sizes.md}) {
    > div {
      padding: 0 8%;
    }
  }
`
