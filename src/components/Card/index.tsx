import React from 'react';
import {
  Text,
  initializeIcons,
  DocumentCard,
  DocumentCardTitle,
  DocumentCardImage,
  ImageFit
} from '@fluentui/react';


const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0',
};

const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#0078d4'
};

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  amount: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      // paddingBottom: 20,
      // paddingTop: 30,
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};



export default function Card(props: { title: string, amount: string, percentage?: string, image?: any; text?: string; }) {
  initializeIcons();
  return (
    <DocumentCard styles={styles.cardStyles}>
      {props.image && <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={props.image} />}
      <DocumentCardTitle title={props.title} />
      <DocumentCardTitle title={props.amount} showAsSecondaryTitle styles={styles.amount} />
      {props.percentage && <DocumentCardTitle title={props.percentage} showAsSecondaryTitle styles={styles.percentage} />}
      {props.text && <Text>{props.text}</Text>}
    </DocumentCard>
  );
};
