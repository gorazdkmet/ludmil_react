import { DEFAULT } from "../consts/constants";

export const paramsToState = (params) => {

    let { cycle, field, id } = params

    if (!field && !cycle && !id) {
        return {
            field: DEFAULT[0].FIELD,
            cycle: DEFAULT[0].CYCLE,
            id: DEFAULT[0].IMG_NUM,
        }
    }

    return {
        field: field,
        cycle: cycle || DEFAULT.find(def => def.FIELD === field).CYCLE,
        id: id || DEFAULT.find(def => def.FIELD === field).IMG_NUM,
    }
}
