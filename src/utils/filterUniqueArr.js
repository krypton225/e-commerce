export default function filterArr(arr) {
    return arr.filter((value, index, self) =>
        self.findIndex((m) => m.id === value.id) === index);
}