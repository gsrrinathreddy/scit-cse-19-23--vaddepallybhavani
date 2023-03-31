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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGn1dvLqKoo7iG84RAAD5LWnqqHuarfS1Yw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Java
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
Java is a widely used object-oriented programming language and software platform that runs on billions of devices,including notebook computers,mobile devices,gaming consoles,medical devices and many others.The rules and syntax of Java are based on the C and C++ languages.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}