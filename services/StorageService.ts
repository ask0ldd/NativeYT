import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StorageService{
    static async get(dataIdentifier : string){
        return await AsyncStorage.getItem(dataIdentifier)
    }

    static async set(dataIdentifier : string){
        await AsyncStorage.setItem(dataIdentifier, JSON.stringify({
            currentStep: 3,
            isComplete: true
        }));
    }
}