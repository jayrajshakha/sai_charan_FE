import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignitems || "flex-start"};
  justify-content: ${(props) => props.justifycontent || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  ${(p) =>
    p.fullwidth &&
    css`
      width: 100%;
    `}
  ${(p) =>
    p.fullheight &&
    css`
      min-height: 100vh;
    `}
  ${(p) =>
    p.grid &&
    css`
      flex-wrap: wrap;
      margin-left: -${p.theme.general.gridGap};
      margin-right: -${p.theme.general.gridGap};
      > div {
        flex-grow: 0;
        flex-shrink: 0;
      }
    `}
  ${(p) =>
    p.disabled &&
    css`
      opacity: 0.7;
      pointer-events: none;
      cursor: not-allowed;
    `}
`;

export default Flex;
