export const layoutStyle = { display: 'flex', flexDirection: 'column', height: 'calc(var(--vh, 1vh) * 100)' }
export const containerStyle = { flex: 1 }
export const headerStyle = { height: '70px' }
export const slideStyle = { minHeight: 'calc(100vh - 80px)' }
export const mainStyle = { minHeight: 'calc(100vh - 80px)' }

// RWD
export const slideGridStyle = {
    ...slideStyle,
    minHeight: { xs: '60px', md: 'calc(100vh - 80px)' }
};

export const mainGridStyle = {
    ...mainStyle,
    minHeight: { xs: 'calc(100vh - 146px)', md: 'calc(100vh - 80px)' }
};