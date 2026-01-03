export type CurrencyInputProps = {
    amount: number,
    currency: string,
    currencies: string[],
    onAmountChange?: (value: number) => void,
    onCurrencyChange: (currency: string) => void,
    readOnly?: boolean
}