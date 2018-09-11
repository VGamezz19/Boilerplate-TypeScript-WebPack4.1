import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import { Hello } from './Hello';

// E2E TEST

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const helloWorldComponent = TestUtils.renderIntoDocument(
    <Hello compiler='TS' framework='React' />);

  const checkboxNode = ReactDOM.findDOMNode(helloWorldComponent);

  // Verify the text
  expect(checkboxNode.textContent).toEqual('Hello from TS and React!');
});
