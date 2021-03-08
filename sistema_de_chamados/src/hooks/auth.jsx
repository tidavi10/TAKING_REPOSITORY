import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({
});


const AuthProvider =  ({ children }) => {
    // Estado que armazena o token. O valor inicial verifica se já tem token no sessionStorage e o 
    // adic. como valor inicial dentro de um objeto, se não o define como objeto vazio.
    
    const [data, setData] = useState(() => {
        const token = 'usdhausgdug9';
        const token1 = sessionStorage.getItem('@chamadosTaking:userToken', token);

        if (token1) {
            return { token };
        }

        return {};
    });

    const login = useCallback(() => {
        // passar o "data" no parâmetro, e utilizar o "async".
        // const response = await api.post('admAuth', {
        //     email,
        //     senha
        // });

        // const { token } = response.data;
        const token = 'usdhausgdug9';


        sessionStorage.setItem('@chamadosTaking:userToken', token);

        setData({ token });

        console.log('oioiooi');
    }, []);

    const logout = useCallback(() => {
        const token = 'usdhausgdug9';
        sessionStorage.removeItem('@chamadosTaking:userToken', token);

        setData({});
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser utilizado com um AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
