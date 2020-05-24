import {storage} from "./config";

async function getUrl(ref) {
    return await ref.getDownloadURL().then( url => url )
}

export async function getCurrentArt(one, two, three) {
    const storageRef = storage.ref()
    const imgRef = storageRef.child(`${one}/${two}/${three}.jpg`)
    return await getUrl(imgRef)
}

export async function getCurrentSet(one, two) {
    const response = await storage.ref(`${one}/${two}`).listAll()
    const promises = await response.items.map(getUrl)
    return await Promise.all(promises)
}
