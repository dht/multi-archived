export type IBoardDefinition = {
    id: string;
    title: string;
    dataTags: string[];
};

export type IBoardPermutation = {
    id: string;
    title: string;
    buckets: IBoardDefinition[];
};

export type IBoardConfig = {
    id: string;
    header: string;
    titleFieldId: string;
    permutations: IBoardPermutation[];
};

export type ISelectionMode = 'none' | 'choose' | 'single' | 'multiple';

export type WithChildren<T> = T & {
    children?: JSX.Element | JSX.Element[];
};

export type ItemActionType =
    | 'selection'
    | 'edit'
    | 'delete'
    | 'addTag'
    | 'removeTag'
    | 'mouse'
    | 'drillDown'
    | string;

export type IDndState = {
    selectedItemId: string;
    movableItemId: string;
    editableItemId: string;
    destinationIndex: number;
    hoverListId: string;
    movableListId: string;
    selectedListId: string;
    destinationListId: string;
    movingBox: IDndBox;
    startPoint: IDndPoint;
    containerPosition: IDndPoint;
    editableNewId: string;
    growMirror: boolean;
};

export type IDndOptions = {};

export type IDndItem = {
    id: string;
    title: string;
    listId: string;
    parentId?: string;
    order: number;
    color?: string;
    dataTags?: string[];
};

export type IDndList = {
    id: string;
    title: string;
    order: number;
    dataTags?: string[];
};

export type IDndData = {
    items: IDndItems;
    lists: IDndLists;
};

export type IDndItems = Record<string, IDndItem>;
export type IDndLists = Record<string, IDndList>;

export type IDndPoint = {
    x: number;
    y: number;
};

export type IDndBox = {
    x: number;
    y: number;
    width: number;
    height: number;
};
