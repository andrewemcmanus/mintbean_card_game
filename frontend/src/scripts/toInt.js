export default function toInt(num) {
    if (num === "J") {
        let int = 11;
        return int;
    } else if (num === "Q") {
        let int = 12;
        return int;
    } else if (num === "K") {
        let int = 13;
        return int;
    } else if (num === "A" ) {
        let int = 1;
        return int;
    } else {
        let int = parseInt(num);
        return int;
    }

}