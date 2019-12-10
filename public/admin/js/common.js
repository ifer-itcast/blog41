function serializeToJSON(form) {
    var result = {};
    var f = form.serializeArray();
    f.forEach(function(item) {
        result[item.name] = item.value;
    });
    return result;
}