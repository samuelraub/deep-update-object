const updateValAtKey = (obj, path, cb) => {
    const checkValidPath = (obj, path) => {
        if (path.length > 1) {
            if (typeof obj[path[0]] !== 'object') {
                return false
            } else {
                return checkValidPath(obj[path[0]], path.slice(1, path.length))
            }
        } else {
            if (obj[path[0]]) {
                return true
            } else {
                return false
            }
        }
    }
    if (checkValidPath(obj, path)) {
        // if (typeof obj[path[0]] !== 'object') return false
        const key = path[0];
        if (path.length > 1) {
            // CALL RECURSIVELY
            return Object.assign({}, obj, { [key]: updateValAtKey(Object.assign({}, obj[key]), path.slice(1, path.length), cb) })
        } else {
            return Object.assign({}, obj, { [key]: cb(obj[key]) })
        }
    } else {
        return false
    }
}

module.exports = updateValAtKey
