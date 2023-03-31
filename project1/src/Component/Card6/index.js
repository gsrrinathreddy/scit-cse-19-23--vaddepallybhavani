import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--mY622Qoc--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/398a310kjdiv647cld1y.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          ESJavaScript
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ESJavaScript is a JavaScript standard intended to ensure the interoperability of web pages across different browsers. It is standardized by ES International in the document ESJavaScript.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}