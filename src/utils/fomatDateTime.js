function format_two_digits(n) {
    return n < 10 ? '0' + n : n;
}

const formatDateTime = (date) => {
    hours = format_two_digits(date.getHours());
    minutes = format_two_digits(date.getMinutes());
    seconds = format_two_digits(date.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
}


export default formatDateTime;