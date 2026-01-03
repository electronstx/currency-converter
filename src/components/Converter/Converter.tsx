import { observer } from "mobx-react-lite";
import { useCurrencyStore } from "../../store/CurrencyStoreContext";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";
import "./Converter.css";

export const Converter = observer(() => {
    const store = useCurrencyStore();

    if (store.isLoading) return <div>Загрузка курсов...</div>;

    return (
        <div className="converter">
            <h2>Currency Converter</h2>

            <CurrencyInput
                amount={store.amount}
                currency={store.fromCurrency}
                currencies={store.currencyList}
                onAmountChange={store.setAmount}
                onCurrencyChange={store.setFromCurrency}
            />

            <div className="conversion-result">
                {store.amount} {store.fromCurrency} = {store.convertedAmount} {store.toCurrency}
            </div>

            <CurrencyInput
                amount={store.convertedAmount}
                currency={store.toCurrency}
                currencies={store.currencyList}
                onCurrencyChange={store.setToCurrency}
                readOnly={true}
            />
        </div>
    );
});