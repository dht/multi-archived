import { SheetDriver } from './Sheet.driver';
import Chance from 'chance';

const chance = new Chance();

describe('Sheet', () => {
    let driver: SheetDriver;

    beforeAll(() => {
        driver = new SheetDriver();
    });

    it('should render button', () => {
        const label = chance.word();

        const element = driver.given
            .props({
                title: label,
            })
            .when.rendered();

        const containerClassName = element.get.containerClassName();
        const innerText = element.get.label();

        expect(containerClassName).toContain('Sheet-wrapper');
        expect(innerText).toBe(label);
    });

    it('should click button', () => {
        const callback = jest.fn();

        driver.given
            .props({
                onClick: callback,
            })
            .when.rendered()
            .when.clicked();

        expect(callback).toHaveBeenCalledTimes(1);
    });
});

describe('Sheet snapshots', () => {
    let driver: SheetDriver;

    beforeAll(() => {
        driver = new SheetDriver();
    });

    it('should match snapshot', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
