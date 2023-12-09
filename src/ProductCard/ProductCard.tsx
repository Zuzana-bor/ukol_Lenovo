import React from 'react';
import Gallery from './Gallery';
import Description from './Description';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProductCard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={7}>
        <Grid xs>
          <Item>
            <Gallery />
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item>
            <Description />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCard;
