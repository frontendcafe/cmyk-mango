import React from 'react';

const MangoContext = React.createContext();

function MangoProvider(props) {
    const [openMenu, setOpenMenu] = React.useState(false);

    return(
        <MangoContext.Provider value={{
            openMenu,
            setOpenMenu,
        }}>
            {props.children}
        </MangoContext.Provider>
    );
}

export { MangoContext, MangoProvider };