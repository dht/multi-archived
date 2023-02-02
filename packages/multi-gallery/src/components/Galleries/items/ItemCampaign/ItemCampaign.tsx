import React from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemCampaignProps = ItemBaseProps & {};

export function ItemCampaign(props: ItemCampaignProps) {
    return <ItemBase {...props} />;
}

export default ItemCampaign;
