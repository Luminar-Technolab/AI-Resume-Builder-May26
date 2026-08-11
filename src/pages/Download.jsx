import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

function Download() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>All Downloaded Resume Details</h2>
        <button onClick={handleOpen} style={{backgroundColor:'#714a2f'}} className='btn text-light'> View in Chart</button>
      </div>
      <p className='my-3 '>Total Downloaded resumes from our site is <span className='fw-bolder'>10</span> </p>
      
      <div className="row my-5">
        {/* duplicate accoriding to download resume count */}
        <div className="col-lg-4 mb-3">
          <div style={{height:'400px'}} className="shadow p-3 rounded">
            <h6>Review at : timestamp</h6>
            <div className="mt-3 text-center">
             <Link to={`/resumes/id`}> <img className='w-100' height={'300px'} src="https://marketplace.canva.com/EAFjRZP7Qy4/1/0/1131w/canva-minimalist-modern-professional-cv-resume-xkDELtpQH94.jpg" alt="download cv" /></Link>
            </div>
          </div>
        </div>
      </div>

    {/* modal */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'#5c494c',width:'100%',padding:'10px',color:'white'}}>
            CV Download Count by Job Role
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='text-center'>pie chart</div>
             <p style={{textAlign:'justify'}}>This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.</p>
          </Box>
        </Box>
      </Modal>

    </div>
  )
}

export default Download