import { LinearProgress } from "@mui/material";
import styled from "@emotion/styled";
import { ILoadingBar } from "./types";

const Container = styled.div`
  background-color: transparent;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
`;

const LoadingBar = ({ isLoading }: ILoadingBar) => {
  return (
    <div>
      {isLoading && (
        <Container>
          <LinearProgress />
        </Container>
      )}
    </div>
  );
};

export default LoadingBar;
