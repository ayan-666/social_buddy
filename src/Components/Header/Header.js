import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    return (
        <div className="header">
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                ----All Users Post----
            </Button>
        </div>
    );
};

export default Header;