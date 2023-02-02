import React, { useState } from 'react';
import { Content, TabsWrapper, Wrapper } from './Multi.style';
import { Gallery } from '@mult/gallery';
import { Board } from '@mult/board';
import { Sheet } from '@mult/sheet';
import { Tabs } from '@mult/ui';
import { tabs } from './Multi.data';

export type MultiProps = {
    id: string;
    data: Json[];
    itemType: ItemType;
    header?: string;
    definitions: ICrudDefinitions;
    callbacks: {
        onDrillDown: (itemId: string, point?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    allOptions?: Json;
    customView?: FC<any>;
    customView2?: FC<any>;
    allMethods?: any;
    newDataExtra?: Json;
    tags?: IOptions;
    dispatch: any;
};

export function Multi(props: MultiProps) {
    const { data, definitions, itemType, callbacks } = props;
    const { bucket, sheet } = definitions;
    const [currentTabId, setCurrentTabId] = useState('board');

    function renderInner() {
        switch (currentTabId) {
            case 'gallery':
                return (
                    <Gallery
                        itemType={itemType}
                        definitions={definitions}
                        options={{}}
                        items={data as any}
                        callbacks={callbacks}
                    />
                );
            case 'board':
                return <Board config={bucket} data={data} />;
            case 'sheet':
                return <Sheet config={sheet} data={data} />;
            default:
                return null;
        }
    }
    return (
        <Wrapper className='Multi-wrapper' data-testid='Multi-wrapper'>
            <TabsWrapper>
                <Tabs
                    tabs={tabs.filter((tab) => !tab.isHidden)}
                    fontSize={17}
                    selectedTabId={currentTabId}
                    onChange={setCurrentTabId}
                />
            </TabsWrapper>
            <Content>{renderInner()}</Content>
        </Wrapper>
    );
}

export default Multi;
