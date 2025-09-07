import config from "../Confi/confi";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwrite).setProject(config.projectId);

        this.account = new Account(this.client);
    }
    // bascially humne async create account isliye nahi banaya kyuki hum nahi chahte ki humhari app sirf appwrite ke sath hi chale if future me backend service change karna padha toh bas ye wrapper hi change karna padega 
    // actually ye ek wrapper hi hai jisme appwrite ke function call karre hai humlog bascially just asunc await use karra hai kyuki hum account create karne ke badh hi aage badhenge 

    async createAccount({ email, password, name }) {
        try {
          const userAccount = await this.account.create(
            ID.unique(),   // <-- unique userId
            email,
            password,
            name
          );
      
          if (userAccount) {
            // If account exists, log in directly
            return this.login({ email, password });
          } else {
            return false;
          }
        } catch (error) {
          throw error;
        }
      }


    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //basically ye humn isliye bana rahe taaki maybe aisa ho sakhta hia directly user home page pe land ho jaye toh uss time uski state malum ho humko uski  
    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        // if try catch me error aa gayi toh still hum null return karwa rahe honge 
        return null;
    }

    async logout(){ 
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;