import Card from '../Card';
import amsterdam from '../../assets/Amsterdam.png';
import nyhavn from '../../assets/Nyhavn.png';
import eiffelTour from '../../assets/EiffelTour.png';
import dolphins from '../../assets/Dolphins.png';
import klitmoller from '../../assets/Klitmoller.png';
import london from '../../assets/London.png';
import blackDiamond from '../../assets/BlackDiamond.png';

import {
  initializeIcons,
  Stack
} from '@fluentui/react';

const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0',
};

// const icon = {
//   fontSize: 24,
//   padding: 15,
//   verticalAlign: 'middle',
//   paddingLeft: 0,
//   color: '#0078d4',
// };

// const styles = {
//   cardStyles: {
//     root: {
//       backgroundColor: '#fff',
//       padding: 20,
//       borderTop: '5px solid #0078d4',
//       width: '90%',
//       maxWidth: '90%',
//       margin: 'auto',
//     }
//   },
//   header: {
//     root: {
//       fontSize: 20,
//       fontWeight: 'bold',
//     }
//   },
//   amount: {
//     root: {
//       fontSize: 26,
//       paddingBottom: 20,
//       paddingTop: 30,
//     }
//   },
//   percentage: {
//     root: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: '#0078d4',
//     }
//   }
// };
const images = [amsterdam, nyhavn, eiffelTour, dolphins, klitmoller, london, blackDiamond];

const cards = [
  {
    title: 'Current Balance',
    amount: '$21876',
    icon: 'Money',
    percentage: '2.3%',
  },
  {
    title: 'Current Expenses',
    amount: '$10876',
    icon: 'PaymentCard',
    percentage: '0.3%',
  },
  {
    title: 'Current Income',
    amount: '$25124',
    icon: 'Savings',
    percentage: '1.3%',
  },
  {
    title: 'Future Expenses',
    amount: '$1509',
    icon: 'PaymentCard',
    percentage: '51.2%',
  },
];

const CardSections = () => {
  initializeIcons();

  return (
    <Stack horizontal style={container}>

      {cards.map((card) => (
        <Card title={card.title}
          amount={card.amount}
          percentage={card.percentage}
          image={images[Math.floor(Math.random() * images.length)]}
          text={'here is random text'} />
      ))
      }
    </Stack >
  );
};


export default CardSections;