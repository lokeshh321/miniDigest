import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea, CardActions, Link as MuiLink } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';

export default function NewsArticle() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Card
        sx={{
          maxWidth: 840,
          borderRadius: '20px',
          mb: 5,
          transition: 'transform 0.2s',
          backgroundColor: '#F7EEE7',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
        elevation={5} // Shadow effect
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://picsum.photos/805/250"
            alt="lorem picsum"
          />
          <CardContent style={{ padding: '20px 15px' }}>
            <MuiLink
              href="https://www.channelnewsasia.com/business/china-us-sanctions-russia-relations-global-supply-chain-3860201"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ fontWeight: 'bold' }}
              >
                China weighs options to blunt US sanctions in Taiwan conflict
              </Typography>
              <Typography variant="body1" color="text.secondary">
                In a war with the US over Taiwan, China would need to create a
                global network of companies under US sanctions, seize American
                assets within its border, and issue gold-denominated bonds,
                accord...
              </Typography>
            </MuiLink>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Tooltip title="Bookmark">
            <IconButton
              size="medium"
              color="secondary"
              sx={{ '&:hover': { transform: 'scale(1.1)' } }}
            >
              <BookmarkAddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              size="medium"
              color="secondary"
              sx={{ '&:hover': { transform: 'scale(1.1)' } }}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton
              size="medium"
              color="secondary"
              sx={{
                marginLeft: 'auto',
                '&:hover': { transform: 'scale(1.1)' },
              }}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Not interested</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </CardActions>
      </Card>

      <Card
        sx={{
          maxWidth: 840,
          borderRadius: '20px',
          mb: 5,
          transition: 'transform 0.2s',
          backgroundColor: '#F7EEE7',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
        elevation={5} // Shadow effect
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://picsum.photos/805/250"
            alt="lorem picsum"
          />
          <CardContent style={{ padding: '20px 15px' }}>
            <MuiLink
              href="https://www.bbc.com/sport/tennis/67166854"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ fontWeight: 'bold' }}
              >
                Coaches can't keep up with my questions- Raducanu
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Former British number one Emma Raducanu says her provoking and
                challenging questions could explain why she has had a high high
                turnover of coaches. The 2021 US Open winner split with her...
              </Typography>
            </MuiLink>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Tooltip title="Bookmark">
            <IconButton
              size="medium"
              color="secondary"
              sx={{ '&:hover': { transform: 'scale(1.1)' } }}
            >
              <BookmarkAddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              size="medium"
              color="secondary"
              sx={{ '&:hover': { transform: 'scale(1.1)' } }}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton
              size="medium"
              color="secondary"
              sx={{
                marginLeft: 'auto',
                '&:hover': { transform: 'scale(1.1)' },
              }}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Not interested</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </CardActions>
      </Card>

      <Card
        sx={{
          maxWidth: 840,
          borderRadius: '20px',
          mb: 5,
          transition: 'transform 0.2s',
          backgroundColor: '#F7EEE7',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
        elevation={5} // Shadow effect
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://picsum.photos/805/250"
            alt="lorem picsum"
          />
          <CardContent style={{ padding: '20px 15px' }}>
            <MuiLink
              href="https://www.bbc.com/news/world-middle-east-67133675"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ fontWeight: 'bold' }}
              >
                Why Egypt is reluctant to open crossing with Gaza
              </Typography>
              <Typography variant="body1" color="text.secondary">
                It was the first Arab state to make peace with Israel back in
                1978 - after fighting several wars with the Jewish state. Now,
                the focus is on Egypt's control of one of the two land routes
                out of the Gaza..
              </Typography>
            </MuiLink>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Tooltip title="Bookmark">
            <IconButton
              size="medium"
              color="secondary"
              sx={{ '&:hover': { transform: 'scale(1.1)' } }}
            >
              <BookmarkAddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              size="medium"
              color="secondary"
              sx={{ '&:hover': { transform: 'scale(1.1)' } }}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton
              size="medium"
              color="secondary"
              sx={{
                marginLeft: 'auto',
                '&:hover': { transform: 'scale(1.1)' },
              }}
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Not interested</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
        </CardActions>
      </Card>
    </div>
  );
}
