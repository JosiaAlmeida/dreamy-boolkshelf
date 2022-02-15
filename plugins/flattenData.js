export default (context, inject) => {
    const flattenData = (data, field) => {
        function isObject(o) {
            try {
                o = JSON.stringify(o);
                o = JSON.parse(o);
                return o instanceof Object && o.constructor === Object;
            } catch (error) {
                return false;
            }
        }
        function isArray(o) {
            try {
                o = JSON.stringify(o);
                o = JSON.parse(o);
                return !!o && Array.isArray(o);
            } catch (error) {
                return false;
            }
        }
        function flatten(o, key) {
            let flat = o[key];
            delete o[key];
            return { ...o, ...flat };
        }
        if (typeof data == "object") {
            let keys = Object.keys(data);
            for (let index = 0; index < keys.length; index++) {
                let key = keys[index];
                /* if (key == "__typename" && data[key] == "Asset") {
                    return data["url"];
                } */
                if (isObject(data[key]) && key == field) {
                    data = flattenData(flatten(data, key), field);
                } else if (isArray(data[key]) || isObject(data[key])) {
                    data[key] = flattenData(data[key], field);
                }
            }
        }
        return data;
    }
    inject('flattenData', flattenData)
    //context.$flattenData = flattenData
}








