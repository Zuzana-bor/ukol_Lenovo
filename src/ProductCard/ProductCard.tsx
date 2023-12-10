import React, { useState } from 'react';
import Gallery from './Gallery';
import Description from './Description';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import MoreInformation from './MoreInformation';
import { CardMedia, Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          <Grid container>
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
            <CardMedia
              sx={{
                position: 'absolute',
                bottom: 370,

                right: 200,

                zIndex: 1,
                width: 400,
              }}
              image="/assets/banky.jpg"
              title="banky"
              component="img"
            />
            <Grid xs={6}>
              <Gallery />
            </Grid>
            <Grid xs={6}>
              <Description handleMoreExpandClick={handleMoreExpandClick} />
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <>
          <Paper elevation={3}>
            <Grid container>
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
              <CardMedia
                sx={{
                  position: 'absolute',
                  bottom: 370,

                  right: 200,

                  zIndex: 1,
                  width: 400,
                }}
                image="/assets/banky.jpg"
                title="banky"
                component="img"
              />
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
