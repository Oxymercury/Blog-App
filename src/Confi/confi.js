const config = {
    appwrite : String(import.meta.env.VITE_APPWRITE_URL),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

// Production grade approach hai ye  kyuki ye sab ek string me hi hojna chhaiye if by chance key acche se nahi aayi toh voh ek number ki tarah bhi treat ho sakhti hai isliye usko always string me rakhte hai 

export default config;