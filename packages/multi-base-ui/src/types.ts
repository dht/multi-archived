export type IOption = {
    id: string;
    text: string;
    iconName?: string;
    secondaryText?: string;
    shortKey?: IShortKey;
    isExtra?: boolean;
    isGap?: boolean;
    hint?: string;
    groupId?: string;
    options?: IOptions;
    // for filters
    value?: string | number | boolean;
    min?: number;
    max?: number;
    disabled?: boolean;
};

export type IOptions = IOption[];

export type IShortKey = {
    key: string;
    id?: string;
    withCommand?: boolean;
    withAlt?: boolean;
    withShift?: boolean;
    withCtrl?: boolean;
    description?: string;
};
