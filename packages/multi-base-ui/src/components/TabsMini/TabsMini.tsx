import React from 'react';
import { Wrapper, Svg, Tab, Title } from './TabsMini.style';
import classnames from 'classnames';
import { IOption } from '../../types';

export type TabsMiniProps = {
    tabs: IOption[];
    selectedTabId?: string;
    onSelect: (tabId: string) => void;
    bkColor?: string;
};

export function TabsMini(props: TabsMiniProps) {
    const { tabs, selectedTabId, bkColor } = props;

    function renderTab(tab: IOption) {
        const { text } = tab;

        const isSelected = selectedTabId === tab.id;

        const className = classnames('tab', {
            selected: isSelected,
        });

        return (
            <Tab
                key={tab.id}
                className={className}
                onClick={() => props.onSelect(tab.id)}
            >
                <Svg width='120' height='28'>
                    <polygon points='0,0 120,0 100,28, 20,28' />
                </Svg>
                <Title className='title'>{text}</Title>
            </Tab>
        );
    }

    function renderTabs() {
        return tabs.map((tab) => renderTab(tab));
    }

    const className = classnames('TabsMini-wrapper', {
        grid: typeof bkColor === 'undefined',
    });

    return (
        <Wrapper
            className={className}
            data-testid='TabsMini-wrapper'
            bkColor={bkColor}
        >
            {renderTabs()}
        </Wrapper>
    );
}

export default TabsMini;
