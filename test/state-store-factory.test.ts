import createStateStore from "../src/state-store-factory";
import StateStore from "../src/state-store";

describe('createStateStore', () => {
    it('should create an instance of StateStore', () => {
        expect(createStateStore(0)).toBeInstanceOf(StateStore);
    });
});
