import React, { createContext, useContext, useCallback } from 'react';
import ToastContainer from '../components/ToastContainer';

const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
    const addToast = useCallback(() => {
        console.log('addToast')
    }, []);

    const removeToast = useCallback(() => {}, []);

    return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
        {children}
        <ToastContainer />
    </ToastContext.Provider>
    );
};

function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast deve ser utilizado com um provider.');
    }

    return context;
}

export { ToastProvider, useToast }