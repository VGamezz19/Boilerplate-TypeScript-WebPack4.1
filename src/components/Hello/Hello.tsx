import * as React from 'react';

import { CheckboxWithLabel } from '../../components';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    /**
     * Support Async/Await
     */
    async testingAsyncAwait() {
        console.log('Start Async/Await');
        const res = await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Done Async/Await');
                resolve('Done!');
            }, 2000);
          });

        console.log(res);
        console.log('Finish Async/Await');
    }
    /**
     * Support Class Properties Proposal
     * but read this before to use it!
     * https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
     */
    testClassPropertiesProposal = () => {
        console.log('ClassProposal too!');
    }

    render() {
        this.testingAsyncAwait();
        this.testClassPropertiesProposal();
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <CheckboxWithLabel labelOn='On' labelOff='Off'></CheckboxWithLabel>
        </div>;
    }
}
