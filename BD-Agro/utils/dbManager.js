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
    let result = await SecureStore.getItemAsync('auth');
    if (result) {
        await SecureStore.deleteItemAsync('auth');
    }
}

export { setData, getData, clearAuth };