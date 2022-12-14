function currencyFormatter(currency) {
    return new Intl.NumberFormat("ru", {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 10,
        currencyDisplay: 'symbol'
    });
}

export default currencyFormatter;