import StateStore from "./state-store";

const createStateStore = <S>(initialState: S) => new StateStore(initialState);

export default createStateStore;
