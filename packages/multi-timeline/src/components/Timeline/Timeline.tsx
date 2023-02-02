import React from 'react';
import { Wrapper } from './Timeline.style';

export type TimelineProps = {};

export function Timeline(_props: TimelineProps) {
    return (
        <Wrapper className="Timeline-wrapper" data-testid="Timeline-wrapper">
            Timeline
        </Wrapper>
    );
}

export default Timeline;
