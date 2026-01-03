import { memo } from 'react';
import type { CurrencyInputProps } from './types';
import './CurrencyInput.css';

export const CurrencyInput = memo(({
    amount,
    currency,
    currencies,
    onAmountChange,
    onCurrencyChange,
    readOnly = false
}: CurrencyInputProps) => (
    <div className="currency-input-wrapper">
        <input
            className="currency-input"
            type="number"
            value={amount}
            onChange={onAmountChange ? (e) => onAmountChange(Number(e.target.value)) : undefined}
            readOnly={readOnly}
            disabled={readOnly}
        />
        <select
            className="currency-select"
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
        >
            {currencies.map(c =>
                <option key={c} value={c}>
                    {c}
                </option>)}
        </select>
    </div>
));