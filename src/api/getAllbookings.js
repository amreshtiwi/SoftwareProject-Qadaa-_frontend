import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiManager from "./apiManager";

export const getAllBooks = async () => {
    try{
        const uri = "/users/bookings";
        const token = await AsyncStorage.getItem("AccessToken");
        const result = await ApiManager(uri,{
            method: "GET",
            headers:{
                "content-type": "application/json",
                "Authorization":'Bearer '+ token,
            },
        })

        return result;
    }catch (err){
        console.log(err);
        return err.response.data;
    }
}