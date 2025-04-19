export const FILTER_STATUS = {
    ALL: 'ALL',
    ACTIVE: 'Active',
    INACTIVE: 'Inactive'
};

export const FILTER_MAP = {
    [FILTER_STATUS.ALL]: () => true,
    [FILTER_STATUS.ACTIVE]: (extension) => extension.isActive,
    [FILTER_STATUS.INACTIVE]: (extension) => !extension.isActive,
};