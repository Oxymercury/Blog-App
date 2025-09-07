import confi from "../Confi/confi";
import { Client, Account, ID,Databases,Storage, Query } from "appwrite";

export class Service{

    client =  new Client()
    Account
    databases
    bucket

    constructor(){
        this.client.setEndpoint(confi.appwrite).setProject(confi.projectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
    
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(confi.databaseId,confi.collectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userId
            })
        }catch(error){
            console.log("Appwrite service :: CreatePost :: error", error)
        }

    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try{
            return await this.databases.updateDocument(confi.databaseId,confi.collectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userId
            })
        }catch(error){
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async DeletePost(slug){
        try{
            await this.databases.deleteDocument(confi.databaseId,confi.collectionId,slug);
            return true;
        }
        catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async GetPost(slug){
        try{
            return await this.databases.getDocument(confi.databaseId,confi.collectionId,slug);
        }
        catch(error){
            console.log("Appwrite service :: GetPost :: error", error);

        }
    }


    // yaha koi argument nahi bhejna padega during calling as hum apne hisab se default paramter dere hai for status jispe indexing lagaye hai and status sirf active hone chahiye unhi ki list chahiye yaha hum pagination bhi laga sakhte hai just see the docunmentation 
    async ListPost(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(confi.databaseId,confi.collectionId,queries) 
        }catch(error){
            console.log("Appwrite service :: ListPost :: error", error);
        }
    }

    // File upload services

    async UploadFile(fileId){
        try{
            return await this.bucket.createFile(confi.bucketId,ID.unique(),fileId);
        }catch(error){
            console.log("Appwrite service :: UploadFile :: error", error);
            return false
        }
    }

    async DeleteFile(fileId){
        try{
            await this.bucket.deleteFile(confi.bucketId,fileId);
            return true;
        }catch(error){
            console.log("Appwrite service :: DeleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFileView(confi.bucketId,fileId);
    }
}


const ObjService = new Service();

export default ObjService;
