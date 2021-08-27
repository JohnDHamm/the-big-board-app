import React from 'react';
import Button from './Button';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('Button'),
  component: Button,
};

const handleClick = () => console.log('Button clicked');

export const Default = () => <Button onClick={handleClick}>sign in</Button>;
export const AltStyle = () => <Button alternate={true} onClick={handleClick}>alternate</Button>;
export const CustonWidth = () => <Button width="50%" onClick={handleClick}>sign in</Button>;
export const Disabled = () => <Button onClick={handleClick} disabled>disabled</Button>;
