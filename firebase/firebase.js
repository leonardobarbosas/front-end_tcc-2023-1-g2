import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAyq2Pj9DL6tHROKTrjdIloKpV8EoS4x8s",
  authDomain: "tcc-project-firebase.firebaseapp.com",
  projectId: "tcc-project-firebase",
  storageBucket: "tcc-project-firebase.appspot.com",
  messagingSenderId: "1068230174634",
  appId: "1:1068230174634:web:ff6d8f3edf4ae6c2d1add3",
  measurementId: "G-Q36CP9DVGH"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)





import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const uploadImage = async (image, name) => {
  const storage = getStorage(app)

  const mountainsRef = ref(storage, `teste/${name}.jpg`)

  await uploadBytes(mountainsRef, image)

  return await getDownloadURL(mountainsRef)
}



export {
  uploadImage
}