import React from 'react';
import { COLORS } from '../../styles';
import { Container, Content } from './Football.styles';

interface Props {
  fillColor?: string;
  outlineColor?: string;
}

const Football: React.FC<Props> = ({
  children,
  fillColor = COLORS.WHITE,
  outlineColor = COLORS.PRIMARY_GREEN,
}) => {
  return (
    <Container>
      <svg viewBox="0 0 219.54 150.24">
        <g id="fill">
          <path
            style={{ fill: fillColor }}
            d="M35.08,148.23c0-21,53.5-68.88,107.91-68.88,55.07,0,109.79,46.64,109.79,69.69,0,22.45-52.68,69.23-108.35,69.23C85.13,218.27,35.08,170.46,35.08,148.23Z"
            transform="translate(-34.08 -69.03)"
          />
        </g>
        <g id="outline">
          <path
            style={{ fill: outlineColor }}
            d="M203.16,94.8a3.15,3.15,0,0,0,.5-.64,3,3,0,0,0-1.12-4.09l-.87-.49.35-.66a4,4,0,0,0-7.11-3.69l-.4.77c-2.43-1.12-5.34-2.39-8.63-3.67l.32-.89a4,4,0,1,0-7.53-2.7l-.32.88c-3.51-1.16-7.27-2.24-11.22-3.17l.12-.62a4,4,0,0,0-7.83-1.62l-.14.68a95.35,95.35,0,0,0-11.43-1.17V73a4,4,0,0,0-8,0v.75a103.6,103.6,0,0,0-10.7,1.13l-.14-.7a4,4,0,0,0-7.83,1.62l.12.59c-3.93.89-7.67,1.94-11.15,3l-.26-.73a4,4,0,1,0-7.53,2.7l.24.66C99,83.47,95.84,84.82,93.23,86l-.4-.78a4,4,0,0,0-7.11,3.69l.34.65-.9.49a3,3,0,0,0-1.11,4.1,2.78,2.78,0,0,0,.5.63C54.72,111,34.08,135.47,34.08,149c0,21.41,51.71,70.27,109.77,70.27S253.62,170.41,253.62,149C253.62,135.47,233,111,203.16,94.8Zm16.16,95.76c-13.52,10-41.31,26.71-75.47,26.71h0c-34.16,0-61.94-16.74-75.47-26.71-19-14-32.3-31.13-32.3-41.56s13.28-27.54,32.3-41.57a149,149,0,0,1,18.9-11.84,3,3,0,0,0,.86-.32l.68-.37,1.66,3.2A4,4,0,0,0,94,100.26a3.87,3.87,0,0,0,1.83-.45,4,4,0,0,0,1.72-5.39l-1.58-3c.69-.31,1.42-.64,2.19-1,2.09-.88,4.25-1.73,6.47-2.53l1.18,3.3a4,4,0,1,0,7.53-2.71l-1.11-3.09c3.34-1,6.79-1.84,10.36-2.54l.64,3.12a4,4,0,0,0,3.92,3.19,3.77,3.77,0,0,0,.81-.08,4,4,0,0,0,3.11-4.73l-.58-2.78c3-.38,6.15-.64,9.32-.76v2.58a4,4,0,0,0,8,0V80.8c3.42.13,6.76.43,10,.86l-.56,2.68a4,4,0,0,0,3.11,4.73,3.77,3.77,0,0,0,.81.08A4,4,0,0,0,165.16,86l.62-3c3.58.73,7.06,1.62,10.42,2.63l-1,2.86a4,4,0,0,0,7.53,2.71l1.09-3c2.75,1,5.4,2.1,7.94,3.22l-1.58,3a4,4,0,0,0,1.72,5.39,3.87,3.87,0,0,0,1.83.45,4,4,0,0,0,3.56-2.16l1.65-3.19.65.36a3.21,3.21,0,0,0,.86.32,149.39,149.39,0,0,1,18.9,11.84c19,14,32.3,31.13,32.3,41.57S238.34,176.53,219.32,190.56Z"
            transform="translate(-34.08 -69.03)"
          />
        </g>
      </svg>
      <Content>{children}</Content>
    </Container>
  );
};

export default Football;
