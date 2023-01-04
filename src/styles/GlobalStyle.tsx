import { css, Global } from "@emotion/react";
import reset from "emotion-reset";

const styles = css`
  ${reset}
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
