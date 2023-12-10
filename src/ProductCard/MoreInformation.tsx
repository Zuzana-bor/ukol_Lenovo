import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { images } from './data';

const MoreInformation = () => {
  return (
    <Grid container columns={{ sm: 8, md: 12 }}>
      <Grid xs={12}>
        {images.map((item) => (
          <Card
            id={item.imgPath}
            sx={{
              height: '25%',
              display: 'flex',
            }}
          >
            <CardContent>
              <CardMedia
                sx={{ justifyContent: 'center', mx: 5, maxWidth: '25%' }}
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
                  mx: 5,
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
