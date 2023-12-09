import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Description = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Lenovo ThinkVision M14d - LED monitor 14 " />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          LCD monitor má úhlopříčku 14", rozlišení 2240x 1400 px, kontrastní
          poměr 1500:1, jas 300 cd/m2, pozorovací úhly 178° horizontálně i
          vertikálně. Nabízí poměr stran 16:10, WLED podsvícení. Má konektory 2x
          USB type-C, dá se sklápět od -5 do 95°. Rozměry činí 106,4 × 216,5 /
          227,5 × 314,4 mm, hmotnost 0.6 kg.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          Více informací
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Popis produktu Mobilní monitor Lenovo ThinkVision M14d:
          </Typography>
          <Typography paragraph>
            Lenovo ThinkVision M14d je velmi tenký a lehký, váží pouze 600
            gramů, přesto nabízí pohodlí moderní USB-C konektory. Dává vám
            svobodu a přitom nepostrádá nic z elegance. Je vhodný do firem, škol
            i domácností. Moderní USB Type-C IPS panel Nízká hmotnost
          </Typography>
          <Typography paragraph>
            Kompatibilní a výkonný Kvalitní zobrazení v plném jasu i za
            zhoršených světelných podmínek při zachování všech standardů
            monitorů Lenovo. To je dotykový Monitor Lenovo ThinkVision M14d. S
            tímto monitorem máte na své straně značku světového formátu, která
            nabízí širokou škálu kompatibilních komponent.
          </Typography>
          <Typography paragraph>
            Lepší konektivita pro snadnou práci Tento kompaktní monitor nabízí
            dva USB-C porty, které bez problémů fungují nejen s notebooky řady
            Lenovo ThinkPad, ale také se spoustou jiných zařízení, jež jsou
            vybavena USB-C. Monitor je díky tomu ideální na cesty. Přijdete,
            připojíte se, prezentujete, tvoříte, ať jste kdekoliv. Inovativní
            řešení Lenovo se svou řadou ThinkVision vsází na inovativní řešení.
            Přináší něco, co ještě v našem světě není považováno úplně za
            konvenční. Přenosný monitor se stojánkem určitě běžný není. Vy ho
            ale můžete mít, využívat všechny výhody a být pokrokoví stejně jako
            samotná společnost Lenovo.
          </Typography>
          <Typography>
            Klíčové vlastnosti: LCD monitor má úhlopříčku 14", rozlišení 2240x
            1400 px, kontrastní poměr 1500:1, jas 300 cd/m2, pozorovací úhly
            178° horizontálně i vertikálně. Nabízí poměr stran 16:10, WLED
            podsvícení. Má konektory 2x USB type-C, dá se sklápět od -5 do 95°.
            Rozměry činí 106,4 × 216,5 / 227,5 × 314,4 mm, hmotnost 0.6 kg.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Description;
