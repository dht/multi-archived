import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TabsMini, TabsMiniProps } from './TabsMini';
import { BaseComponentDriver } from 'testing-base';

export class TabsMiniDriver extends BaseComponentDriver {
    private props: Partial<TabsMiniProps> = {};

    constructor() {
        super('TabsMini');
    }

    when: any = {
        rendered: () => {
            render(<TabsMini {...(this.props as TabsMiniProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TabsMini {...(this.props as TabsMiniProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TabsMiniProps>) => {
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
