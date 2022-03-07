import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 20px 0;
  box-shadow: 0px 3px rgba(0, 0, 0, 0.1)
`

export const GridTitle = styled.p<{primary?: boolean, maxRow: number}>`
  font-size: 16px;
  color: ${({primary}) => primary ? 'var(--color-primary-1)' : 'var(--color-secondary)'} ;
  grid-row: 1 / ${({maxRow}) => maxRow ? maxRow : 1};
  font-family: var(--font-SpoqaHanSans);
  font-weight: 700;
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`