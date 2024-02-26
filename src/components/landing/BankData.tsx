import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "#fff",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

interface BankDataProps {
  open: boolean;
  handleClose: () => void;
}

const BankData: React.FC<BankDataProps> = ({ open, handleClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography
              variant="h6"
              component="h2"
              align="center"
              style={{ color: "#4f5046" }}
            >
              Datos Bancarios
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Typography style={{ color: "#4f5046" }} sx={{ mt: 2 }}>
            Banco Galicia
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Typography style={{ color: "#4f5046" }}>
              CBU: 0070358930004003890391
            </Typography>
            <IconButton
              onClick={() => handleCopy("0070358930004003890391")}
              disabled={copied}
              style={{ color: "#4f5046" }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Typography style={{ color: "#4f5046" }}>
              Alias: ABEL.ROBRA.PYTHON
            </Typography>
            <IconButton
              onClick={() => handleCopy("ABEL.ROBRA.PYTHON")}
              disabled={copied}
              style={{ color: "#4f5046" }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Typography style={{ color: "#4f5046" }}>
              Binance User ID: 455358805
            </Typography>
            <IconButton
              onClick={() => handleCopy("455358805")}
              disabled={copied}
              style={{ color: "#4f5046" }}
            >
              <ContentCopyIcon />
            </IconButton>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default BankData;
