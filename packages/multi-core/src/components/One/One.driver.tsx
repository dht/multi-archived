import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { One, OneProps } from './One';
import { BaseComponentDriver } from 'testing-base';

export class OneDriver extends BaseComponentDriver {
    private props: Partial<OneProps> = {};

    constructor() {
        super('One');
    }

    when: any = {
        rendered: () => {
            render(<One {...(this.props as OneProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<One {...(this.props as OneProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<OneProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
