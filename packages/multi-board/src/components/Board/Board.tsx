import React from 'react';
import { Content, Wrapper } from './Board.style';
import { IBoardConfig, ItemActionType } from '../../types';
import { SelectionContext } from '../../context/Selection.context';
import { TabsMini } from '@mult/ui';
import { useContext, useMemo, useState } from '@gdi/hooks';
import { usePermutations } from '../../hooks/usePermutations';
import { getNewDataTagsByList } from '../../utils/lists';
import Trello from '../Trello/Trello';

export type BoardProps = {
    config: IBoardConfig;
    data: Json[];
    callbacks: {
        onAction: (actionId: string, data?: Json) => void;
        onItemAction: (
            id: string,
            action: ItemActionType,
            data?: Json
        ) => Promise<boolean>;
    };
};

export function Board(props: BoardProps) {
    const { config, data } = props;
    const { permutations = [], titleFieldId } = config;

    const contextSelection = useContext(SelectionContext);

    const firstPermutation = permutations[0] || {};

    const [permutationId, setPermutationId] = useState<string>(
        firstPermutation.id
    );

    const permutation = permutations.find((p) => p.id === permutationId);
    const buckets = permutation?.buckets ?? [];
    const scopedPermutationId = `${config.id}-${permutationId}`;

    const [lists, items] = usePermutations(
        config,
        permutations,
        permutationId,
        data
    );

    const callbacks = useMemo(
        () => ({
            onMove: (
                itemId: string,
                destinationListId: string,
                order: number
            ) => {
                const item = items[itemId];
                const bucketDestination = buckets.find(
                    (b) => b.id === destinationListId
                );

                if (!item || !bucketDestination) {
                    return;
                }

                const dataTags = getNewDataTagsByList(
                    scopedPermutationId,
                    item.dataTags ?? [],
                    buckets as any,
                    destinationListId
                );

                const orderPerBucket = {
                    [scopedPermutationId]: order,
                };

                props.callbacks.onAction('editWithData', {
                    id: itemId,
                    dataTags,
                    order: orderPerBucket,
                });
            },
            onEdit: (itemId: string, value: string) => {
                props.callbacks.onAction('editWithData', {
                    id: itemId,
                    [titleFieldId]: value,
                });
            },
            onNew: (listId: string, value: string, order: number) => {
                const orderPerPermutation = {
                    [scopedPermutationId]: order,
                };

                const dataTags = getNewDataTagsByList(
                    scopedPermutationId,
                    [],
                    buckets as any,
                    listId
                );

                props.callbacks.onAction('newWithData', {
                    [titleFieldId]: value,
                    dataTags,
                    order: orderPerPermutation,
                });
            },
            onDelete: (itemId: string) => {
                return props.callbacks.onItemAction(itemId, 'delete');
            },
            onEditList: (listId: string, newValue: string) => {},
            onSelect: (itemId: string) => {
                contextSelection.callbacks.onSelect(itemId);
            },
        }),
        [permutation, items]
    );

    const options = useMemo(() => ({}), []);

    const tabs = useMemo(() => {
        return permutations.map((p) => ({
            id: p.id,
            text: p.title,
        }));
    }, [permutations]);

    function renderInner() {
        return (
            <Trello
                id={config.id}
                lists={lists}
                items={items}
                callbacks={callbacks}
                options={options}
            />
        );
    }

    return (
        <Wrapper className='Board-wrapper' data-testid='Board-wrapper'>
            <Content>{renderInner()}</Content>
            <TabsMini
                tabs={tabs}
                selectedTabId={permutationId}
                onSelect={(tabId) => setPermutationId(tabId)}
            />
        </Wrapper>
    );
}

export default Board;
