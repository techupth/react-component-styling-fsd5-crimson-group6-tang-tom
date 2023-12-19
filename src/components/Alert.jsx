/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// Start coding here

function Alert(props) {
  return (
    <div
      className="alert"
      css={css`
        background-color: ${props.alertStyle.color};
        text-align: left;
        padding: 5px;
        margin: 5px;
      `}
    >
      <img src={props.alertStyle.icon} alt="" /> This is {props.alertStyle.text}
      alert box
    </div>
  );
}
export default Alert;
