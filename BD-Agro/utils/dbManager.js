import * as SecureStore from 'expo-secure-store';

async function setData(value) {
    const jsonFormat = JSON.stringify(value);
    await SecureStore.setItemAsync('auth', jsonFormat);
}

async function getData() {
    let result = await SecureStore.getItemAsync('auth');
    if (result) {
        const data = JSON.parse(result);
        return data;
    }
}
async function clearAuth() {
    try {
        let result = await SecureStore.getItemAsync('auth');
        if (result) {
            await SecureStore.deleteItemAsync('auth');
        }
    } catch (error) {
        console.log(222, error);
    }
}

export { setData, getData, clearAuth };