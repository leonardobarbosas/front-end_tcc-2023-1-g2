import {app} from "./firebaseApp.js"
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
//https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js
//firebase/auth

const provider = new GoogleAuthProvider()

const auth = getAuth(app)

const getInfosUser = async()=>{
    const result = await signInWithRedirect(auth, provider)
    //const credential = GoogleAuthProvider.credentialFromResult(result)

    const user = result.user

    const userInfos = {
        email: user.email,
        nome: user.displayName,
        uid: user.uid
    }

    return userInfos
}



export{
    getInfosUser
}