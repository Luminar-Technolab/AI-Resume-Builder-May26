import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditSquare } from "react-icons/md";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from 'react-icons/fa6';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} style={{color:'#714a2f'}} className='btn'><MdEditSquare className='fs-3'/> Edit CV</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'#5c494c',width:'100%',padding:'10px',color:'white'}}>
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personel information */}
            <div>
                <h3>Personal Details</h3>
                <div className="p-3 row">
                  <TextField id="standard-basic-name" label="FullName" variant="standard" />
                  <TextField id="standard-basic-loc" label="Location" variant="standard" />
                  <FormControl variant='standard'>
                    <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                    <Select  labelId="demo-simple-select-label"  id="demo-simple-select"  label="Job"  >
                      <MenuItem value={'Job'}>Job</MenuItem>
                    </Select>
                  </FormControl>
                </div>
            </div>
            {/* contact details */}
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-email" label="Email" variant="standard" />
                <TextField id="standard-basic-num" label="Contact Number" variant="standard" />
                <TextField id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                <TextField id="standard-basic-github" label="Github Link" variant="standard" />
              </div>
            </div>
            {/* educational details */}
            <div>
              <h3>Educational Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-degree" label="Bacherlor's Degree" variant="standard" />
                <TextField id="standard-basic-college" label="College/University Name" variant="standard" />
                <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />
              </div>
            </div>
            {/* skills */}
            <div>
              <h3>Skills</h3>
              <div className="d-flex p-3">
                <input type="text" placeholder='Add New Skill' className="form-control" />
                <Button>add</Button>
              </div>
              <h6>Added Skills : </h6>
              <div className="p-3 d-flex justify-content-between flex-wrap">
                {/* all skills - duplocate */}
                <Button variant='contained' sx={{backgroundColor:'#b19596'}}>skill <FaXmark className='ms-2'/> </Button>
              </div>
            </div>
            {/* summary */}
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField id="summary" label="Summary" multiline variant='standard' />
              </div>
            </div>
            {/* update button */}
            <button className='btn text-light mt-3' style={{backgroundColor:'#5c494c'}}>UPDATE CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit