import { makeAutoObservable, runInAction } from "mobx";
import { fetchExchangeRates } from "../api/currencyApi";

export class CurrencyStore {
    rates: Record<string, number> = {};
    amount: number = 1;
    fromCurrency: string = 'USD';
    toCurrency: string = 'RUB';
    isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this);
        this.loadRates();
    }

    async loadRates() {
        try {
            const data = await fetchExchangeRates();
            runInAction(() => {
                this.rates = data.conversion_rates;
                this.isLoading = false;
            });
        } catch (error) {
            console.error(error);
        }
    }

    setAmount = (value: number): void => {
        this.amount = value;
    };

    setFromCurrency = (currency: string): void => {
        this.fromCurrency = currency;
    };

    setToCurrency = (currency: string): void => {
        this.toCurrency = currency;
    };

    get currencyList(): string[] {
        return Object.keys(this.rates);
    }

    get convertedAmount(): number {
        if (!this.rates[this.fromCurrency] || !this.rates[this.toCurrency]) return 0;

        const priceInUsd = this.amount / this.rates[this.fromCurrency];

        return Number((priceInUsd * this.rates[this.toCurrency]).toFixed(2));
    }
}