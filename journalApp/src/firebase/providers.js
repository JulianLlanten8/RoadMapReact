import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    //agregar Cross-Origin-Opener-Policy: same-origin
    const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData?.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    return { ok: false, errorCode, errorMessage, email, credential };
  }
};

export const registerUserWhitEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const user = resp.user;

    console.log(user);

    //TODO: Agregar displayName en firebase

    return { ok: true, displayName, email /* photoURL, uid */ };
  } catch (error) {
    return {
      ok: false,
      errorCode: error.message,
    };
  }
};
