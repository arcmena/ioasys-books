import styled from 'styled-components'

import { css } from 'styled-components'

export const limitWords = (numberOfWords: number) => {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${numberOfWords};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 113px 1fr;

  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 4px;

  padding: 16px 0;

  max-width: 288px;
  width: 100%;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  transition: box-shadow 0.2s ease-in-out;

  cursor: pointer;

  .book__image {
    display: flex;
    justify-self: center;
    align-items: center;

    > div {
      box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);

      border-radius: 2px;
    }
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

      ${limitWords(2)}
    }

    h3 {
      font-size: 12px;
      line-height: 20px;
      color: ${({ theme: { colors } }) => colors.purple};

      ${limitWords(1)}
    }

    p {
      font-size: 12px;
      line-height: 20px;
      color: ${({ theme: { colors } }) => colors.gray};
    }
  }

  &:hover {
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.32);
  }
`
