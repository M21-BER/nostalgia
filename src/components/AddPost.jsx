import {
  Box,
  Button,
  Fab,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { memo, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #444",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Toolbar onClick={handleOpen}>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          sx={{ position: "fixed", bottom: "1%" }}
        >
          <Add />
        </Fab>
      </Toolbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            marginBottom={3}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Add Post
          </Typography>
          <TextField type="file" sx={{ marginBottom: 3 }} fullWidth />
          <TextField
            placeholder="Enter a post here..."
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" startIcon={<Add />} sx={{ mt: 3 }}>
            Add Post
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default memo(AddPost);
