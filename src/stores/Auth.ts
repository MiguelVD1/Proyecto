import { defineStore } from 'pinia';
import type { User } from '@/model/types';
import { useLocalStorage } from '@vueuse/core';

import axios from 'axios';
import router from '@/router';


export const userAuthToken = defineStore('auth', {
  state: () => ({
    user: useLocalStorage<User>('userData', {} as User), 
    token: useLocalStorage<string>('auth_token', ''),
  }),
  getters: {
    getUsername(state): string{
      return state.user.usuario || '';
    },
    getToken(state): string {
      return state.token || '';
    },
  },
  actions: {
    setUserAndToken(user: User, token: string) {
      this.user = user;
      this.token = token || ''; // Asigna un array vacío si el token es null o undefined
    },
    async isAuthenticated() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/home', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
        // Verifica si la propiedad 'status' de la respuesta es verdadera
        return response.data.status === true;
        } catch (error) {
          this.clearUserAndToken();

        if (axios.isAxiosError(error)) {
          // Aserción de tipo para tratar `data` como un objeto con una propiedad `message` de tipo `string`
          const data = error.response?.data as { message?: string };
          if (error.response?.status === 401 || data.message === "Usuario no autenticado") {
            // Manejo del error específico
            return false;
          }
        }
        // En caso de otros errores, también devolver false
        return false;
      }
    },
    async logout() {
      try {
        // Realiza la petición para cerrar sesión usando Axios y el token
        await axios.post('http://127.0.0.1:8000/api/v1/auth/logout', null, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        // Limpiar datos de usuario y token después de cerrar sesión
        this.clearUserAndToken();
        // Usa la instancia del router para redirigir
        router.push('/');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error al cerrar sesión:', error.message);
        } else {
          console.error('Error desconocido al cerrar sesión:', error);
        }
        // Considera mostrar un mensaje al usuario
      }
    },
    clearUserAndToken() {
      this.user = {} as User; // Asigna un objeto User vacío
      this.token = ''; // Asigna un string vacío
    },
  },
});