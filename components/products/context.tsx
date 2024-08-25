import { createContext, useState } from 'react';
interface prop{
    sortBy:string,
    setSortBy : (sort:string)=>void
}
export const MyContext = createContext<prop|null>(null);

export function MyProvider({ children } : Readonly<{
	children: React.ReactNode;
}>) {
    const [sortBy, setSortBy] = useState('SORT BY');
    return (
        <MyContext.Provider value={{ sortBy, setSortBy }}>
            {children}
        </MyContext.Provider>
    );
}
