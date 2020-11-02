import { get } from 'api';
const url = '/api/users';

export const loadUsers = (page) => {
    return get(url, {page: page})
}

export const loadDefault = () => {
    return get(url, {page: 1})
}

export const loadUser = (id) => {
    const url = '/api/users/' + id;
    return get(url)
}