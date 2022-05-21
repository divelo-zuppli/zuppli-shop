import axios from "axios";
import {
  getAuth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from "firebase/auth";
import Cookies from 'js-cookie';

import Router from 'next/router';

import { useUI } from '@contexts/ui.context';

import environment from "../../environment";
import { setFirebaseProviderId } from "./utils";

import firebaseApp from "../../firebase";

import userService from './user.service'

class AuthService {
  constructor() {
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  async sendOTP({ phoneCode, phoneNumber, channel }) {
    await axios({
      url: `${environment.API_URL}authentication/otp`,
      method: "POST",
      data: {
        phoneCode: "" + phoneCode,
        phoneNumber: "" + phoneNumber,
        channel,
      },
    });

    return {
      message: "OTP sent successfully",
    };
  }

  async verifyOTP({ phoneCode, phoneNumber, otp }) {
    const {
      data: { customToken },
    } = await axios({
      url: `${environment.API_URL}authentication/otp`,
      method: "PATCH",
      data: {
        phoneCode: "" + phoneCode,
        phoneNumber: "" + phoneNumber,
        otp,
      },
    });

    console.log("customToken", customToken);

    const auth = getAuth(firebaseApp);

    const userCredential = await signInWithCustomToken(auth, customToken);

    const { providerId } = userCredential;

    if (providerId) setFirebaseProviderId(providerId);
  }

  async login({ email, password }) {
    console.log('LOGIN WITH EMAIL');

    const auth = getAuth(firebaseApp);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const { providerId } = userCredential;

    if (providerId) setFirebaseProviderId(providerId);
  }

  async loginWithGoogle() {
    console.log('LOGIN WITH GOOGLE');

    const auth = getAuth(firebaseApp);

    this.googleAuthProvider.setCustomParameters({
      prompt: 'select_account'
    });

    this.googleAuthProvider.addScope('profile');
    this.googleAuthProvider.addScope('email');

    const userCredential = await signInWithPopup(auth, this.googleAuthProvider);

    const additionalUserInfo = await getAdditionalUserInfo(userCredential);

    const { isNewUser } = additionalUserInfo;

    const { user } = userCredential;

    if (isNewUser) {
      // console.log('NEW USER');

      const authUid = user.uid;
      const email = user.email;
      const fullName = additionalUserInfo.profile.name || user.displayName;
      const phoneNumber = user.phoneNumber || null;

      await userService.registerFromAuthUid({
        authUid,
        email,
        fullName,
        phoneNumber,
      });
    }

    Cookies.set('auth_token', user.accessToken);

    // console.log('LOGIN WITH GOOGLE RESULT', userCredential);

    const { providerId } = userCredential;

    if (providerId) setFirebaseProviderId(providerId);
  }

  async logout() {
    const auth = getAuth(firebaseApp);
    Cookies.remove('auth_token');
    if (auth.currentUser) await auth.signOut();
  }
}

const authService = new AuthService();

export default authService;