// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ButtonComponent({ type, text }) {
  if (type === "primary") {
    return (
      <button
        css={css`
          display: flex;
          width: 171.19px;
          height: 50px;
          padding: 0px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          border-radius: 4px;
          background: var(--Primary, #074ee8);
          color: white;
        `}
      >
        {text}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        css={css`
          display: flex;
          width: 171.19px;
          height: 50px;
          padding: 0px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          border-radius: 4px;
          background: #07a4e8;
          color: white;
        `}
      >
        {text}
      </button>
    );
  } else {
    return <button>{text}</button>;
  }
}

export default ButtonComponent;
