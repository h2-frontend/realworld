import { LoginCredentials } from '../models/login-credentials.model';
import { RegisterCredentials } from '../models/register-credentials.model';
import { User } from '../models/user.model';
import { getHeaders } from '../utils/headers.util';

import { LOGIN_URL, REGISTER_URL, USER_URL } from './constants';

export async function login(credentials: LoginCredentials) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ user: credentials }),
  });
}
export async function register(credentials: RegisterCredentials) {
  return fetch(REGISTER_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ user: credentials }),
  });
}
export async function getCurrentUser(): Promise<User> {
  return fetch(USER_URL, {
    method: 'GET',
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.user);
}

export async function updateUser(user: unknown) {
  return fetch(USER_URL, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({ user }),
  });
}
