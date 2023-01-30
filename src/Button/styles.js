import styled, { css } from "styled-components";
import { COLORS } from "../constants";

const VARIANTS = {
  fill: css`
    --bg: ${COLORS.primary};
    --color: ${COLORS.white};
    --border-color: ${COLORS.primary};
    --hover-bg: ${COLORS.white};
    --hover-color: ${COLORS.primary};
    --hover-border-color: ${COLORS.primary};
  `,
  outline: css`
    --bg: ${COLORS.white};
    --color: ${COLORS.primary};
    --border-color: ${COLORS.primary};
    --hover-bg: ${COLORS.primary};
    --hover-color: ${COLORS.white};
    --hover-border-color: ${COLORS.primary};
  `,
  ghost: css`
    --bg: none;
    --color: ${COLORS.gray};
    --border-color: transparent;
    --hover-bg: transparent;
    --hover-color: ${COLORS.transparentGray75};
    --hover-border-color: transparent;
  `,
};

const SIZES = {
  small: css`
    --height: 40px;
    --max-width: 360px;
  `,
  medium: css`
    --height: 48px;
    --max-width: 360px;
  `,
  large: css`
    --height: 56px;
    --max-width: 480px;
  `,
};

export const ButtonBase = styled.button`
  ${(props) => VARIANTS[props.variant]}
  ${(props) => SIZES[props.size]}

  width: 100%;
  max-width: var(--max-width);
  height: var(--height);
  padding-inline: 24px;
  color: var(--color);
  background: var(--bg);
  border: 2px solid var(--border-color);
  border-radius: 4px;

  transition: background 160ms, color 160ms ease;

  &:hover {
    cursor: pointer;
    background: var(--hover-bg);
    color: var(--hover-color);
    border-color: var(--hover-border-color);
  }
`;
