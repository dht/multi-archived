import React, { useContext, useMemo, useState } from 'react';
import {
    Content,
    H1,
    Header,
    Stats,
    TabsWrapper,
    Wrapper,
} from './Multi.style';
import { Gallery } from '@mult/gallery';
import { Board } from '@mult/board';
import { Sheet } from '@mult/sheet';
import { Tabs } from '@mult/ui';
import { tabs } from './Multi.data';
import { FilterContext } from '../../context/Filter.context';
import { CrudContext } from '../../context/Crud.context';

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
    views?: string[];
};

export function Multi(props: MultiProps) {
    const {
        id,
        definitions,
        allOptions,
        customView: CustomView,
        customView2: CustomView2,
        itemType,
        views = [],
    } = props;

    const { bucket, sheet } = definitions;
    const [currentTabId, setCurrentTabId] = useState('board');

    const contextFilter = useContext(FilterContext);
    const contextCrud = useContext(CrudContext);

    const customViewExists = typeof CustomView !== 'undefined';
    const customView2Exists = typeof CustomView2 !== 'undefined';

    const { data = [], multiBar } = contextFilter;
    const { state, patchState, callbacks, config } = contextCrud;

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
                return (
                    <Board config={bucket} data={data} callbacks={callbacks} />
                );
            case 'sheet':
                return (
                    <Sheet
                        config={config.sheet}
                        data={data}
                        allOptions={allOptions}
                        onChange={(itemId: string, change: Json) =>
                            callbacks.onItemAction(itemId, 'change', change)
                        }
                        onDelete={(itemId: string) =>
                            callbacks.onItemAction(itemId, 'delete')
                        }
                        onNew={(data: Json) => {
                            callbacks.onAction('newWithData', data);
                        }}
                    />
                );
            default:
                return null;
        }
    }

    const tabs = useMemo(() => {
        return views.map((view) => ({
            id: view,
            label: view,
        }));
    }, []);

    return (
        <Wrapper className='Multi-wrapper' data-testid='Multi-wrapper'>
            <TabsWrapper>
                <Header>
                    <H1>{id}</H1>
                </Header>
                <Tabs
                    tabs={tabs}
                    fontSize={17}
                    selectedTabId={currentTabId}
                    onChange={setCurrentTabId}
                />
                <Stats>
                    <span>5</span> items
                </Stats>
            </TabsWrapper>
            <Content>{renderInner()}</Content>
        </Wrapper>
    );
}

export default Multi;
