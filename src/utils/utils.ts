export function formatDate(date: string) {
    const dateToFormat = new Date(date);
    const currentDate = new Date();
    const daysAgo = currentDate.getDay() - dateToFormat.getDay();
    const hours = dateToFormat.getHours() > 9 ? dateToFormat.getHours().toString() : '0' + dateToFormat.getHours().toString();
    const minutes = dateToFormat.getMinutes() > 9 ? dateToFormat.getMinutes().toString() : '0' + dateToFormat.getMinutes().toString();

    let formattedDate = '';
    const time = `${hours}:${minutes} i-GMT+${-dateToFormat.getTimezoneOffset() / 60}`;
    switch (true) {
        case (daysAgo === 0): {
            formattedDate += 'Сегодня, ';
            break;
        }
        case (daysAgo === 1): {
            formattedDate += 'Вчера, ';
            break;
        }
        case ((daysAgo > 9) && (daysAgo % 10 === 1)): {
            formattedDate += `${daysAgo} дня назад, `;
            break;
        }
        case ((daysAgo > 9) && (daysAgo % 10 > 1) && (daysAgo % 10 < 5)): {
            formattedDate += `${daysAgo} дня назад, `;
            break;
        }
        default: {
            formattedDate += `${daysAgo} дней назад, `;
            break;
        }
    }
    return `${formattedDate + time}`
}
