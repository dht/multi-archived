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
    viewType: MultiViewType;
    sort: string;
    filter: string;
    fields: IMultiFieldInstance[];
    boardOptions?: Partial<IBoardOptions>;
    calendarOptions?: Partial<ICalendarOptions>;
    galleryOptions?: Partial<IGalleryOptions>;
    listOptions?: Partial<IListOptions>;
    sheetOptions?: Partial<ISheetOptions>;
    tableOptions?: Partial<ITableOptions>;
    timelineOptions?: Partial<ITimelineOptions>;
    oneOptions?: Partial<IOneOptions>;
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
    colorId: Color;
    order: number;
};

export type IMultiField = {
    id: string;
    title: string;
    dataId: string;
    fieldType: FieldType;
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
    showAs: 'bar' | 'pie' | 'none';
    colorId: Color;
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
    overlayType: 'none' | 'relative' | 'absolute';
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
    direction?: SortDirection;
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
    relation: RelationNumber;
};

export type IFilterDateOptions = {
    relation: RelationDate;
    unit: DateUnit;
};

export type IFilterStringOptions = {
    relation: RelationString;
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
