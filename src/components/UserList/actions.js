import { get } from 'api';

export const loadUsers = (page, setLoading, setPagination, pagination) => {
    console.log(page);
    setLoading(true);
    setPagination && setPagination({...pagination, current: page});
    const url = '/api/users?page=' + page
    return get(url).then((data) => data)
}