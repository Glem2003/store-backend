export const layoutStyle = { display: 'flex', flexDirection: 'column', height: '100vh' }
export const containerStyle = { flex: 1 }
export const headerStyle = { height: '70px' }
export const slideStyle = { minHeight: 'calc(100vh - 80px)', border: '1px solid black' }
export const mainStyle = { minHeight: 'calc(100vh - 80px)', border: '1px solid black' }

// RWD
export const slideGridStyle = {
    ...slideStyle,
    minHeight: { xs: '60px', md: 'calc(100vh - 80px)' }
};

export const mainGridStyle = {
    ...mainStyle,
    minHeight: { xs: 'calc(100vh - 146px)', md: 'calc(100vh - 80px)' }
};