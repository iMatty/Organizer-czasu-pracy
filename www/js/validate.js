function Validate(date) {
    date_formated = matched_date(date)
    if (date_formated == null) {
        return false;
    }

    let day = date_formated[1];
    let month = date_formated[3];
    let year = date_formated[5];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    if ((year == yyyy) || (year == (yyyy + 1))) {
        if (between(month, 1, 12)) {
            if (['1', '3', '5', '7', '8', '10', '12'].includes(month) && between(day, 1, 31 )) {
                return true
            } else if (['4', '6', '9', '11'].includes(month) && between(day, 1, 30 ) ) {
                return true
            } else if ( (month == 2) && between(day,1,28)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

function between(x, min, max) {
    return x >= min && x <= max;
}

function matched_date(date) {
    let pattern = /(\d{2})(.|-|\/)(\d{2})(.|-|\/)(\d{4})/;
    return date.match(pattern)
}