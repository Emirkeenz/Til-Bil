import styled, { css }  from "styled-components"

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `
  return acc;
}, {})


export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${media.sm`
    max-width: 540px;
  `}
  ${media.md`
    max-width: 720px;
  `}
  ${media.lg`
    max-width: 960px;
  `}
  ${media.xl`
    max-width: 1140px;
  `}
  ${media.xxl`
    max-width: 1320px;
  `}
`