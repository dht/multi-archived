import { useContext, useMemo } from 'react';
import { DispatchContextProvider } from '../../context/Dispatch.context';
import { SelectionContextProvider } from '../../context/Selection.context';
import { FilterContextProvider } from '../../context/Filter.context';
import { CrudContextProvider } from '../../context/Crud.context';
import Multi, { MultiProps } from './Multi';

export const MultiContainer = (props: MultiProps) => {
    const {
        id,
        data,
        callbacks,
        allOptions,
        dispatch,
        definitions,
        tags = [],
    } = props;

    const optionsFilter = useMemo(() => ({}), []);

    const allMethods = useMemo(() => {
        return props.allMethods || {};
    }, [props.allMethods]);

    const newDataExtra = useMemo(() => {
        return props.newDataExtra || {};
    }, [props.newDataExtra]);

    const allDetails = useMemo(() => {
        return {};
    }, []);

    const optionsCrud = useMemo(
        () => ({
            allOptions,
            allDetails,
            allMethods,
            newDataExtra,
            doubleClickActionId: 'drillDown',
        }),
        [allMethods]
    );

    return (
        <DispatchContextProvider dispatch={dispatch}>
            <SelectionContextProvider
                initialMode='none'
                initialValue={[]}
                onSelectionChange={callbacks.onSelectionChange}
            >
                <FilterContextProvider
                    data={data}
                    config={definitions.filters}
                    allOptions={allOptions}
                    options={optionsFilter}
                    tags={tags}
                >
                    <CrudContextProvider
                        id={id}
                        data={data}
                        config={definitions}
                        options={optionsCrud}
                        callbacks={callbacks}
                    >
                        <Multi {...props} />
                    </CrudContextProvider>
                </FilterContextProvider>
            </SelectionContextProvider>
        </DispatchContextProvider>
    );
};

export default MultiContainer;
