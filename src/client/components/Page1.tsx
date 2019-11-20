import React from 'react';

export interface Page1Props {
  compiler: string;
  framework: string;
}

const Page1 = (props: Page1Props) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

export default Page1;
