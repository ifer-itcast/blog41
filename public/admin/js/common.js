function arrToJSON(form) {
    let arr = form.serializeArray();
    let result = {};
    arr.forEach(item => {
        result[item.name] = item.value;
    });
    return result;
}