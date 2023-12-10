import React, { useState } from 'react';
import Gallery from './Gallery';
import Description from './Description';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import MoreInformation from './MoreInformation';
import { CardMedia } from '@mui/material';

const ProductCard = () => {
  const [info, setInfo] = useState(false);

  const handleMoreExpandClick = () => {
    setInfo(!info);
  };

  return (
    <Box
      sx={{
        m: 25,
      }}
    >
      {info === false ? (
        <Paper>
          <Grid container columns={{ sm: 8, md: 12 }}>
            <CardMedia
              sx={{
                position: 'absolute',
                top: 200,
                left: 200,
                zIndex: 1,
                width: 150,
              }}
              image="/assets/vanoce.jpg"
              title="vanoce"
              component="img"
            />

            <Grid sm={6} md={6}>
              <Gallery />
            </Grid>
            <Grid sm={6} md={6}>
              <Description handleMoreExpandClick={handleMoreExpandClick} />
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <>
          <Paper elevation={3}>
            <Grid container columns={{ sm: 8, md: 12 }}>
              <CardMedia
                sx={{
                  position: 'absolute',
                  top: 200,

                  left: 200,

                  zIndex: 1,
                  width: 150,
                }}
                image="/assets/vanoce.jpg"
                title="vanoce"
                component="img"
              />{' '}
              <Grid xs={6}>
                <Gallery />
              </Grid>
              <Grid xs={6}>
                <Description handleMoreExpandClick={handleMoreExpandClick} />
              </Grid>
            </Grid>
          </Paper>

          <Grid xs={12}>
            <MoreInformation />
          </Grid>
        </>
      )}
    </Box>
  );
};

export default ProductCard;
