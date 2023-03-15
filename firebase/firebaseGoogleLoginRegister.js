import {app} from "./firebaseApp.js"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

const provider = new GoogleAuthProvider()

const auth = getAuth(app)

const result = await signInWithPopup(auth, provider)

const credential = GoogleAuthProvider.credentialFromResult(result)

const token = credential.accessToken

const user = result.user

const getName = async()=>{
    const name = user.displayName

    return name
}

const getEmail = async()=>{
    const email = user.email

    return email
}

const getUidPassword = async()=>{
    const uid = user.uid

    return uid
}



export{
    getEmail,getName,getUidPassword
}