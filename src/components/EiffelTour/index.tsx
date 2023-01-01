import React from 'react';
import eiffelTour from '../../assets/EiffelTour.png';
import {
  Image
} from "@fluentui/react";
export default function EiffelTour() {
  return (
    <Image src={eiffelTour} width={800} title='Eiffel Tour' />
  );
}
