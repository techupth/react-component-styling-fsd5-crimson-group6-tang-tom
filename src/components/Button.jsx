/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Start coding here
function Button(props) {
  return (
    <button
      type="submit"
      css={css`
        background-color: ${props.buttonColor};
      `}
    >
      Button
    </button>
  );
}
export default Button;
