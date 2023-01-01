import React from 'react';
import lamps from '../../assets/Lamps.png';
import {
  Image
} from "@fluentui/react";
export default function Lamps() {
  return (
    <Image src={lamps} width={800} title='Lamps' />
  );
}
