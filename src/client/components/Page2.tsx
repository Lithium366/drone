import React from 'react';
import get from 'lodash/get';

export interface tProps {
  greetings: string;
}

const obj = {
  message: 'Hi there'
};

const Page2 = ({ greetings }: tProps) => (
  <>
    <h1>Hello from {greetings}!</h1>
    <h2>{get(obj, 'message')}</h2>
  </>
);

export default Page2;
