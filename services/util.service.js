export default class UtilService {
    randomFromTo(from, to) {
        return Math.floor(Math.random() * to) + from;
    }
    stringBuilder() {
        let args = arguments;
        if (args.length <= 1) {
            return args;
        }
        let result = args[0];
        for (let i = 1; i < args.length; i++) {
            result = result.replace(new RegExp("\\{" + (i - 1) + "\\}", "g"), args[i]);
        }
        return result;
    }
}