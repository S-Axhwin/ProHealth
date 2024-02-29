import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Rating from '@mui/material/Rating';


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width: "40%", justifyContent: "center" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: "50%" }}>
        <CardContent sx={{width: 'fitContent'}}>
          <Typography component="div" variant="h5">
            Doctor Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            id
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Rating name="disabled" value={4} disabled />
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}