import styled from "@emotion/styled";
import { Modal, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { IModalProps } from "../types";

const dafaultStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "800px",
  width: "90%",
  background: "white",
  boxShadow: 24,
  padding: "8px 20px",
  borderRadius: "4px",
};

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 32px;
  justify-content: space-between;
  padding-bottom: 8px;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 80vh;
  overflow: auto;
  padding: 20px 0px;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgray;
  padding-top: 8px;
`;

const ModalView = ({
  open,
  onClose,
  headerTitle,
  children,
  footer,
}: IModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={dafaultStyle}>
        <StyledHeader>
          <Typography variant="h5">{headerTitle}</Typography>
          <StyledCloseIcon onClick={onClose} />
        </StyledHeader>
        <StyledBody>{children}</StyledBody>
        <StyledFooter>{footer}</StyledFooter>
      </Box>
    </Modal>
  );
};

export default ModalView;
