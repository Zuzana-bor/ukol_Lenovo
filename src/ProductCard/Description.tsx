import React, { FC, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

type DescriptionProps = {
  handleMoreExpandClick: () => void;
};

const Description: FC<DescriptionProps> = ({ handleMoreExpandClick }) => {
  const [count, setCount] = useState(0);

  const handleCLick = () => {
    setCount(count + 1);
  };

  return (
    <Card sx={{ objectFit: 'cover', height: '100%' }}>
      <CardHeader title="Lenovo ThinkVision M14d - LED monitor 14 " />

      <CardContent>
        <Typography variant="body1" color="text.primary">
          Náš kód: 373027
        </Typography>
        <Typography variant="h6" color="green">
          Skladem 5 kusů
        </Typography>
        <br />
        <Typography
          variant="body2"
          color="text.sekundary"
          sx={{
            mx: 5,
          }}
        >
          LCD monitor má úhlopříčku 14", rozlišení 2240x 1400 px, kontrastní
          poměr 1500:1, jas 300 cd/m2, pozorovací úhly 178° horizontálně i
          vertikálně. Nabízí poměr stran 16:10, WLED podsvícení. Má konektory 2x
          USB type-C, dá se sklápět od -5 do 95°. Rozměry činí 106,4 × 216,5 /
          227,5 × 314,4 mm, hmotnost 0.6 kg.
          <Button
            sx={{}}
            onClick={() => {
              handleMoreExpandClick();
            }}
          >
            Víc informací
          </Button>
        </Typography>
      </CardContent>
      <Typography variant="h3">5 990 Kč</Typography>
      <Button
        onClick={handleCLick}
        variant="outlined"
        sx={{
          mx: 15,
        }}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={count} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
          Přidat do košíku
        </IconButton>
      </Button>
    </Card>
  );
};

export default Description;
