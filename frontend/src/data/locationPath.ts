export const pathToItemMap: Record<string, string> = {
    '/store-backend': 'store-ops-home',
    '/store-backend/products': 'store-ops-products',
    '/store-backend/orders': 'store-ops-orders',
    '/store-backend/customers': 'store-ops-customers',
    '/store-backend/setting': 'setting-ops-setting',
    '/store-backend/setting/user': 'setting-ops-user',
    '/store-backend/setting/system': 'setting-ops-system'
}

export const itemToPathMap: Record<string, string> = {
    'store-ops-home': '/store-backend',
    'store-ops-products': '/store-backend/products',
    'store-ops-orders': '/store-backend/orders',
    'store-ops-customers': '/store-backend/customers',
    'setting-ops-setting': '/store-backend/setting',
    'setting-ops-user': '/store-backend/setting/user',
    'setting-ops-system': '/store-backend/setting/system'
}