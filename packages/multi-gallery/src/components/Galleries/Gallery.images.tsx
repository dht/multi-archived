import React from 'react';
import AllProviders from './AllProviders';
import AnyGallery from './Gallery.any';
import { Wrapper } from './styles';
import { definitions } from '../../definitions';
import { IGalleryOptions } from '../../types';

export type ImageGalleryProps = {
    items: IImage[];
    options?: Partial<IGalleryOptions>;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: string, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    hideParts?: FilterPart[];
};

export function ImageGallery(props: ImageGalleryProps) {
    const { items, callbacks, hideParts } = props;

    return (
        <Wrapper
            className='ImageGallery-wrapper'
            data-testid='ImageGallery-wrapper'
        >
            <AllProviders
                id='imageGallery'
                data={items}
                definitions={definitions as any}
                callbacks={callbacks}
            >
                <AnyGallery
                    itemType='image'
                    definitions={definitions as any}
                    {...props}
                />
            </AllProviders>
        </Wrapper>
    );
}

export default ImageGallery;
