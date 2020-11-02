import { get } from 'api';

export const loadUsers = (page, setLoading) => {
    setLoading(true);
    const url = '/api/users?page=' + page
    return get(url).then((data) => data)
}

export const loadDefault = (setLoading) => {
    setLoading(true);
    const url = '/api/users?page=1'
    return get(url).then(data => data)
}