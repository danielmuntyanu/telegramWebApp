
const default_values = {
    '--tg-theme-text-color': '#ffffff',
    '--tg-theme-bg-color': '#000000',
    '--tg-theme-button-text-color': 'white',
    '--tg-theme-button-color': 'green',
    '--tg-theme-secondary-bg-color': 'blue'
}

let got_ones = false

function check_and_replace(variable) {
    if (
        !getComputedStyle(
            document.documentElement
        ).getPropertyValue(variable)
    ) {
        document.documentElement.style.setProperty(
            variable,
            default_values[variable]
        );
    } else {
        got_ones = true;
        return;
    }
}

for (let key in default_values) {
    if (got_ones) {
        break;
    } else {
        check_and_replace(key);
    }
}




