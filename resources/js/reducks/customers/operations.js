import {fetchCustomers} from './actions';
import * as Api from '../../api/app';

export const fetchCustomersData = () => {
    return async (dispatch, getState) => {
        const response = await axios.get('/api/customers');
        await Api.get('/api/customers', {} , false)
        .then(res => {
            console.log(res)
        })
        .catch(res => {
            console.log(res);
        });
        dispatch(fetchCustomers(response.data));
    }
};

export const pusherTest = () => {
        alert("test成功！")
}