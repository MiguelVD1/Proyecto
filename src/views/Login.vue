<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import axios from "axios";
import { userAuthToken } from "../stores/Auth";
export default {
  data() {
    return {
      form: false,
      visible: false,
      remember: false,
      usuario: null,
      firstNameRules: [
        (value: string | null | undefined) => {
          if (value && value.length > 3) return true;
          return "First name must be at least 3 characters.";
        },
      ],
      password: null,
      passwordRules: [
        (value: string | null | undefined) => {
          if (!/\d/.test(value || "")) return true;
          return "Last name cannot contain digits.";
        },
      ],
    };
  },
  methods: {
    async onSubmit() {
      if (!this.form) return;

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/v1/auth/login",
          {
            usuario: this.usuario,
            password: this.password,
          }
        );

        const { data, token, status, message } = response.data;

        if (status) {
          const loginUser = userAuthToken();
          loginUser.setUserAndToken(data, token);

          (this as any).$swal({
            title: message,
            icon: "success",
            showConfirmButton: false,
            toast: true,
            position: "top",
            timer: 4000,
            timerProgressBar: true,
          });

          this.$router.push("/home");
        }
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          (this as any).$swal({
            title: "Error al iniciar sesión",
            text: "Verifica tus credenciales.",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else {
          (this as any).$swal({
            title: "Error",
            text: "Inténtalo de nuevo",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    },
    required (v: string) {
        return !!v || 'El Campo es requerido'
    }
  },
};
</script>
<!--toda la logica-->

<template>
  <v-container class="d-flex flex-row align-center">
    <v-card
      style="width: 700px; height: 680px"
      color="#F097D8"
      class="text-center"
    >
      <v-card-title style="color: white; margin-top: 100px; font-size: 50px"
        >AMIGA MENSTRUAL</v-card-title
      >
      <v-avatar
        style="margin-top: 20px"
        image="./logo.jpeg"
        size="400"
      ></v-avatar>
    </v-card>

    <v-card style="width: 700px; height: 680px" class="text-center">
      <div>
        <v-img class="mx-auto my-6" max-width="228" src="./inicio.png" />
        <v-form v-model="form" @submit.prevent="onSubmit">
            <v-card
              class="mx-auto pa-12 pb-8"
              elevation="8"
              max-width="448"
              rounded="lg"
            >
              <div class="text-subtitle-1 text-medium-emphasis">
                Nombre de usuario
              </div>

              <v-text-field
                density="compact"
                placeholder="Usuario"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                v-model="usuario"
              ></v-text-field>

              <div class="text-subtitle-1 text-medium-emphasis">Contraseña</div>
              <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Contraseña"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                v-model="password"
                :rules="[required]"
                @click:append-inner="visible = !visible"
              ></v-text-field>

              <v-card class="mb-12" color="surface-variant" variant="tonal">
              </v-card>

              <v-btn
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
                type="submit"
                :disabled="!form"
              >
                Inicio
              </v-btn>


              <v-card-text class="text-medium-emphasis">
                <a
                  class="text-caption text-decoration-none text-blue"
                  href="/Registro"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Registrate <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
              </v-card-text>
            </v-card>
          </v-form>
      </div>
    </v-card>
  </v-container>
</template>
