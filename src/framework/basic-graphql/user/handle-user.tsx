import UserService from '../../../services/user.service';
import AuthService from '../../../services/auth.service';
import Cookies from 'js-cookie'

export interface SignUpInputType {
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
  }

  export interface LogInInputType {
      email: string;
      password: string;
  }

export const createUserWithEmail = async(input: SignUpInputType) => {

    const userData = await UserService.register(input)
    const token = `${input.email}.${input.fullName}`.split('').reverse().join('')

    Cookies.set('auth_token', token)
    Cookies.set('auth_uid', userData.authUid)

    return { user: userData }
}

export const getUser = async(authUid: string) => {
    const userData = await UserService.getUser(authUid)

    return { user: userData.getUser }
}

export const loginWithEmail = async(input: LogInInputType) => {
    const userData = await AuthService.login(input)

    const token = `${input.email}`.split('').reverse().join('')

    const user = {
        authUid: userData.user.uid,
        fullName: userData.user.displayName,
        phoneNumber: userData.user.phoneNumber,
        email: userData.user.email
    }

    Cookies.set('auth_token', token)
    Cookies.set('auth_uid', userData.user.uid)

    return { user: user }

}