import React, {useState} from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField, } from "@mui/material";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
    handleCloseModal();
  };
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Shoes Store</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.
        </p>
      </Box>

      <Box sx={{ m: 3, ml: 10, py:2, width: "600px", }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Sell Your Shoes</Typography>
          <Typography>
            Do you create your own shoes? Click the button below to sell them
            through our store!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleOpenModal}
          >
            Sell Now
          </Button>
        </Paper>
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Sell Your Shoes</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmitForm}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Shoe Name"
              type="text"
              fullWidth
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Shoe Category"
              type="text"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="price"
              label="Price"
              type="number"
              fullWidth
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitForm} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@shoestore.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
    </Layout>
  );
};

export default Contact;
