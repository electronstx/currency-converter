import { createContext, useContext, useRef, type ReactNode } from 'react';
import { CurrencyStore } from './CurrencyStore';

const CurrencyStoreContext = createContext<CurrencyStore | null>(null);

export const CurrencyStoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<CurrencyStore | null>(null);

    if (storeRef.current === null) {
        storeRef.current = new CurrencyStore();
    }

    return (
        <CurrencyStoreContext.Provider value={storeRef.current}>
            {children}
        </CurrencyStoreContext.Provider>
    );
};

export const useCurrencyStore = (): CurrencyStore => {
    const store = useContext(CurrencyStoreContext);

    if (!store) {
        throw new Error('useCurrencyStore должен быть внутри CurrencyStoreProvider');
    }

    return store;
};