import classnames from 'classnames';
import React, { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { Tab, Wrapper } from './Tabs.style';
import { useLanguage } from '@gdi/language';
import { ITabData } from '../../types';

export type TabsProps = {
    tabs: ITabData[];
    selectedTabId: string;
    onChange?: (tabId: string) => void;
    fontSize?: number;
};

export function Tabs(props: TabsProps) {
    const { tabs, selectedTabId, fontSize = 20 } = props;
    const { tj } = useLanguage();

    const tabsTranslated = useMemo(() => {
        return tj(tabs);
    }, [tabs]);

    function onClick(tab: ITabData) {
        if (props.onChange) {
            props.onChange(tab.id);
        }

        if (tab.pathName) {
            invokeEvent('navigate', { path: tab.pathName });
        }
    }

    function renderTab(tab: ITabData) {
        const { label } = tab;

        const className = classnames('tab', {
            selected: selectedTabId === tab.id,
        });

        return (
            <Tab
                key={tab.id}
                className={className}
                onMouseDown={() => onClick(tab)}
                fontSize={fontSize}
            >
                {label}
            </Tab>
        );
    }

    function renderTabs() {
        return tabsTranslated.map((tab: ITabData) => renderTab(tab));
    }

    return (
        <Wrapper className='Tabs-wrapper' data-testid='Tabs-wrapper'>
            {renderTabs()}
        </Wrapper>
    );
}

export default Tabs;
