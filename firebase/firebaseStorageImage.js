import {app} from "./firebaseApp.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js"

const uploadImage = async (image, name) => {
  const storage = getStorage(app)

  const mountainsRef = ref(storage, `teste/${name}.jpg`)

  await uploadBytes(mountainsRef, image)

  return await getDownloadURL(mountainsRef)
}



export {
  uploadImage
}