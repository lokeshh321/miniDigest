import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import React, { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../configs/firebase';
import { UserContext } from '../../utils/UserContext';

const pages = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'Trending',
    href: 'trending',
  },
  {
    name: 'Explore',
    href: 'explore',
  },
];

export default function Nav() {
  const { userInfo } = useContext(UserContext);
  const [userIcon, setUserIcon] = useState('');

  useMemo(() => {
    if (userInfo && userInfo.username && userInfo.username[0]) {
      setUserIcon(userInfo.username[0]);
    }
  }, [userInfo]);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
        console.log('Signed out successfully');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #dee2e6',
        height: '6rem',
        paddingTop: '0.5rem',
        zIndex: 2,
        display: 'flex',
        backgroundColor: 'white',
      }}
    >
      <Container width="xm">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/user/home"
            sx={{
              mr: 8,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            SUMMARISE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: 'black',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: 'black', textDecoration: 'none' }}
                    component={Link}
                    to={page.href}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/user/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SUMMARISE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.href}
                disableRipple
                sx={{
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  my: 2,
                  mx: 2,
                  color: 'black',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: 0,
                    height: 2,
                    bottom: -1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'black',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover:before': {
                    width: '100%',
                  },
                }}
                style={{ backgroundColor: 'transparent' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ width: 56, height: 56 }}>{userIcon}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  to="/user/profile"
                  style={{ textDecoration: 'none' }}
                  color="black"
                >
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu && handleLogout}>
                <Typography
                  textAlign="center"
                  component={Link}
                  to="/"
                  style={{ textDecoration: 'none' }}
                  color="black"
                >
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
