import React from 'react';

export interface tProps {
  greetings: string;
}
const Page1 = ({ greetings }: tProps) => <h1>Hello from {greetings}!</h1>;

export default Page1;
