type TabData = {
    id: string;
    label: string;
    pathName?: string;
    isHidden?: boolean;
};

export const tabs: TabData[] = [
    {
        id: 'board',
        label: 'Board',
    },
    {
        id: 'gallery',
        label: 'Gallery',
    },
    {
        id: 'sheet',
        label: 'Sheet',
    },
    {
        id: 'one',
        label: 'One',
        isHidden: true,
    },
];
