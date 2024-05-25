import {Client, Account, Databases, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_URL,
    projectID: import.meta.env.VITE_APPWRITE_PROJECTID,
    databaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageID: import.meta.env.VITE_APPWRITE_STORAGE_ID, 
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectID);
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const databases = new Databases(client);
export const storages = new Storage(client);
export const avatars = new Avatars(client);