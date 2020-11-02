import { get } from 'api';

export const loadUsers = (page) => {
    const url = '/api/users?page=' + page
    return get(url)
}

export const loadDefault = () => {
    const url = '/api/users?page=1'
    return get(url)
}