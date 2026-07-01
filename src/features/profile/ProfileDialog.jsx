import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ProfileMenu from "./ProfileMenu";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-container": {
          justifyContent: "flex-end",
          alignItems: "flex-start",
        },
      }}
      PaperProps={{
        sx: {
          position: "fixed",
          right: 0,
          top: 0,
          width: 300,
          height: "100vh",
          margin: 0,
          borderRadius: 0,
        },
      }}
    >
      <ProfileMenu />
    </Dialog>
  );
}

export default function ProfileDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <img
        className="rounded-full h-8 -mt-3.75"
        variant="outlined"
        onClick={handleClickOpen}
        src="https://i.pravatar.cc/150"
      />
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
