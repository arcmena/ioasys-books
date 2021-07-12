import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 113px 1fr;

  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 4px;

  padding: 16px 0;

  max-width: 288px;
  width: 100%;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  .book__image {
    display: flex;
    justify-self: center;
    align-items: center;
  }

  .book__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      padding-right: 16px;
    }

    h1 {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;

      color: ${({ theme: { colors } }) => colors.black_2};
    }

    h3 {
      font-size: 12px;
      line-height: 20px;
      color: ${({ theme: { colors } }) => colors.purple};
    }

    p {
      font-size: 12px;
      line-height: 20px;
      color: ${({ theme: { colors } }) => colors.gray};
    }
  }
`
