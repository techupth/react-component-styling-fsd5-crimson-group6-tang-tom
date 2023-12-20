// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function AlertComponent({ type }) {
  const boxStyle = `width: 650px;
height: 76px;
flex-shrink: 0;
border-radius: 10px;
align-items: center;
display: flex;`;

  const fontStyle = `color: #444;
font-family: Kanit;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;`;

  if (type === "error") {
    return (
      <div
        css={css`
          background: #f9c8c8;
          ${boxStyle}
        `}
      >
        <span
          css={css`
            margin: 12px;
          `}
        >
          <img src="/frown.svg" alt="" />
        </span>
        <div
          css={css`
            ${fontStyle}
          `}
        >
          This is eror alert box
        </div>
      </div>
    );
  } else if (type === "warning") {
    return (
      <div
        css={css`
          background: #f9d9c8;
          ${boxStyle}
        `}
      >
        <span
          css={css`
            margin: 12px;
          `}
        >
          <img src="/alert-triangle.svg" alt="" />
        </span>
        <div
          css={css`
            ${fontStyle}
          `}
        >
          This is warning alert box
        </div>
      </div>
    );
  } else if (type === "info") {
    return (
      <div
        css={css`
          background: #f9ebc8;
          ${boxStyle}
        `}
      >
        <span
          css={css`
            margin: 12px;
          `}
        >
          <img src="/alert-circle.svg" alt="" />
        </span>
        <div
          css={css`
            ${fontStyle}
          `}
        >
          This is info alert box
        </div>
      </div>
    );
  } else if (type === "success") {
    return (
      <div
        css={css`
          background: #cef7cd;
          ${boxStyle}
        `}
      >
        <span
          css={css`
            margin: 12px;
          `}
        >
          <img src="/check-circle.svg" alt="" />
        </span>
        <div
          css={css`
            ${fontStyle}
          `}
        >
          This is success alert box
        </div>
      </div>
    );
  }
}

export default AlertComponent;
