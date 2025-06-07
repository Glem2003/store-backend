export const pathToItemMap: Record<string, string> = {
    '/backend': 'store-ops-home',
    '/backend/products': 'store-ops-products',
    '/backend/orders': 'store-ops-orders',
    '/backend/customers': 'store-ops-customers',
    '/backend/setting': 'setting-ops-setting',
    '/backend/setting/user': 'setting-ops-user',
    '/backend/setting/system': 'setting-ops-system'
}

export const itemToPathMap: Record<string, string> = {
    'store-ops-home': '/backend',
    'store-ops-products': '/backend/products',
    'store-ops-orders': '/backend/orders',
    'store-ops-customers': '/backend/customers',
    'setting-ops-setting': '/backend/setting',
    'setting-ops-user': '/backend/setting/user',
    'setting-ops-system': '/backend/setting/system'
}