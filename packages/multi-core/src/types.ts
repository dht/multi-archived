export type IMultiConfig = {
    id: string;
    title: string;
    views: IMultiView[];
    fields: IMultiField[];
    sorts: IMultiSort[];
    filters: IMultiFilter[];
};

export type IMultiView = {
    id: string;
    title: string;
    order?: number;
    viewType: MultiViewType | string;
    fields?: IMultiFieldInstance[];
    sort?: string;
    filter?: string;
    boardOptions?: Partial<IBoardOptions>;
    calendarOptions?: Partial<ICalendarOptions>;
    galleryOptions?: Partial<IGalleryOptions>;
    listOptions?: Partial<IListOptions>;
    sheetOptions?: Partial<ISheetOptions>;
    tableOptions?: Partial<ITableOptions>;
    timelineOptions?: Partial<ITimelineOptions>;
    oneOptions?: Partial<IOneOptions>;
    tabs?: IMultiBoardTab[];
};

export type FieldType =
    | 'text'
    | 'number'
    | 'select'
    | 'multiSelect'
    | 'status'
    | 'date'
    | 'checkbox'
    | 'url'
    | 'email'
    | 'phone'
    | 'image';

export type MultiViewType =
    | 'board'
    | 'calendar'
    | 'gallery'
    | 'list'
    | 'sheet'
    | 'table'
    | 'timeline'
    | 'one';

export type IMultiOption = {
    id: string;
    title: string;
    colorId: Color | string;
    order: number;
};

export type IMultiField = {
    id: string;
    title: string;
    dataId: string;
    fieldType: FieldType | string;
};

export type IMultiFieldInstance = {
    id: string;
    fieldId: string;
    title?: string;
    order: number;
    style?: Partial<IMultiFieldInstanceStyle>;
    options?: Partial<IMultiFieldInstanceOptions>;
    locationId?: string;
};

export type IMultiFieldInstanceOptions = {
    showAs: 'bar' | 'pie' | 'none' | string;
    colorId: Color | string;
    showNumber: boolean;
};

export type IMultiFieldInstanceStyle = {
    width: number;
    noWrap: boolean;
};

// =========== View options ===========

export type IBoardOptions = {
    titleFieldId: string;
};

export type ICalendarOptions = {};

export type IGalleryOptions = {
    itemType: string;
    fixedRatio: number;
    column: number;
    overlayType: 'none' | 'relative' | 'absolute' | string;
};

export type IListOptions = {};

export type ISheetOptions = {
    wrapAllColumns: boolean;
};

export type ITableOptions = {};

export type ITimelineOptions = {};

export type IOneOptions = {};

// =========== Sorting ===========
export type IMultiSort = {
    id: string;
    fieldId: string;
    order: number;
    direction?: SortDirection | string;
};

export type SortDirection = 'asc' | 'desc' | 'none';

// =========== Filtering ===========
export type RelationNumber =
    | '='
    | '!='
    | '<'
    | '<='
    | '>'
    | '>='
    | 'empty'
    | 'notEmpty';

export type RelationDate = 'past' | 'this' | 'next';

export type ISelectionMode = 'none' | 'choose' | 'single' | 'multiple';

export type DateUnit = 'day' | 'week' | 'month' | 'year';

export type RelationString =
    | 'is'
    | 'isNot'
    | 'contains'
    | 'doesNotContain'
    | 'startsWith'
    | 'endsWith'
    | 'empty'
    | 'notEmpty';

export type IMultiFilter = {
    id: string;
    fieldId: string;
    value?: string | number | string[] | number[];
    numberOptions?: IFilterNumberOptions;
    dateOptions?: IFilterNumberOptions;
    stringOptions?: IFilterStringOptions;
};

export type IFilterNumberOptions = {
    relation: RelationNumber | string;
};

export type IFilterDateOptions = {
    relation: RelationDate | string;
    unit: DateUnit | string;
};

export type IFilterStringOptions = {
    relation: RelationString | string;
};

// =========== Colors ===========
export type Color =
    | 'lightGray'
    | 'gray'
    | 'brown'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'red';

export type IColors = Record<Color, string>;

export type IMultiBoardTab = {
    id: string;
    title: string;
    lanes: IMultiBoardLane[];
};

export type IMultiBoardLane = {
    id: string;
    title: string;
    dataTags: string[];
};

export type WithChildren<T> = T & {
    children?: JSX.Element | JSX.Element[];
};

export type ICrudOptions = {
    doubleClickActionId: string; // ItemActionType;
    newDataExtra?: Json;
    allOptions?: Json;
    allDetails?: any;
    allMethods?: any;
};

export type ICrudState = {
    viewMode: MultiViewType;
};

export type ItemType =
    // CMS
    | 'widget'
    | 'page'
    | 'pageInstance'
    | 'image'
    | 'layout'
    | 'layoutItem'
    | 'template'
    | 'article'
    | 'comment'

    // CRM & sales
    | 'person'
    | 'lead'
    | 'sale'
    | 'cart'
    | 'order'
    | 'coupon'
    | 'product'
    | 'campaign'

    // Project management
    | 'ticket'
    | 'project'

    // Other
    | 'inbox'
    | 'link'
    | 'event';
