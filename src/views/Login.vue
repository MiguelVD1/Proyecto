<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
export default {
  data() {
    return {
      visible: false,
      remember: false,
      usuario: '',
      firstNameRules: [
        (value: string | null | undefined) => {
          if (value && value.length > 3) return true;
          return 'First name must be at least 3 characters.';
        },
      ],
      password: '',
      passwordRules: [
        (value: string | null | undefined) => {
          if (!/\d/.test(value || '')) return true;
          return 'Last name cannot contain digits.';
        },
      ],
      
    };
  },
};   
</script> <!--toda la logica-->

<template>
    <v-container class="d-flex flex-row align-center">
        
        <v-card 
            style="width: 700px; height: 680px;"
            color="#F097D8"
            class="text-center"
        >
            <v-card-title style = "color:white; margin-top: 100px; font-size:50px;"
            >AMIGA MENSTRUAL</v-card-title>
            <v-avatar style="margin-top: 20px;"  image="./logo.jpeg" size="400"></v-avatar>
        </v-card>

        <v-card
            style="width: 700px; height: 680px;"
            class="text-center"
        >
        <div>
          <v-img
            class="mx-auto my-6"
            max-width="228"
            src="./inicio.png"
          />

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Nombre de usuario</div>

      <v-text-field
        density="compact"
        placeholder="Nombre de usuario"
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
        :rules="passwordRules"
        @click:append-inner="visible = !visible"
      ></v-text-field>
        <v-checkbox class="text-caption text-decoration-none text-medium-emphasis" 
          v-model="remember"
          color="secondary"
          label="Recuerdame"
        ></v-checkbox>

        <a class="text-caption text-decoration-none text-blue" 
          href="#" rel="noopener noreferrer" target="_blank"
        >¿Has olvidado tu contraseña?</a>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <!--<v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text>-->
      </v-card>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block
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
  </div>
        </v-card>
    </v-container>
</template>