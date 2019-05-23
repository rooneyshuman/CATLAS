// Populate breed array from JSON file
var breed_arr = [];
$(function () {
    $.ajax({
        'type': 'GET',
        'url': '../cat_breeds.json',
        'success': function (data) {
            for (i in data)
                breed_arr.push(data[i]);
        }
    })
});

// Autocomplete breed element with breed array as source
$("#breed").autocomplete({
    source: breed_arr
});