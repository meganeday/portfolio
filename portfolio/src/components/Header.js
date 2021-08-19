import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuImg from '../images/menu-button.png';
import Resume from '../day,meganelizabeth-resume.pdf';
import {Link} from 'react-router-dom';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} id="nav">
        <img src={MenuImg} alt="three stacked lines to signify menu button" className="menu"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/"><MenuItem>Home</MenuItem></Link>
        {/* <Link to="/about"><MenuItem>About</MenuItem></Link> */}
        <Link to="/portfolio"><MenuItem>Portfolio</MenuItem></Link>
        <a href={Resume} target="_blank"><MenuItem>Resume</MenuItem></a>
      </Menu>
    </div>
  );
}