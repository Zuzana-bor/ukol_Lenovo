import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { images } from './data';

const MoreInformation = () => {
  return (
    <Grid container spacing={0.5}>
      <Grid xs={12}>
        {images.map((item) => (
          <Card
            id={item.imgPath}
            sx={{
              display: 'flex',

              direction: 'column',
              textAlign: 'center',
            }}
          >
            <CardContent>
              <CardMedia
                sx={{
                  width: '20% ',
                  justifyContent: 'center',
                  textAlign: 'center',
                  mx: 100,
                }}
                component="img"
                image={item.imgPath}
                title={item.headline}
              />
              <Typography gutterBottom variant="h6">
                {item.headline}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mx: 50,
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default MoreInformation;
