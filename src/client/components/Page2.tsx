import React from 'react';
import { get } from 'lodash';

export interface Page2Props {
  compiler: string;
  framework: string;
}

const obj = {
  hello: 'world'
};

const Page2 = (props: Page2Props) => (
  <h1>
    Hello from {props.compiler} and {props.framework} + {get(obj, 'hello')}!
  </h1>
);

export default Page2;
