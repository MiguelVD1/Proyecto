<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      ex4: ["error"],
      form: false,
      usuario: null,
      nombre: null,
      apellidos: null,
      periodoTipo:null,
      cicloDuracion: null,
      cicloFrecuencia:null,
      cicloFlujo: null,
      cicloHumor: null ,
      cicloMalestar: null,
      cicloSexo:null,
      nameRules: [
        (value: string | null | undefined) => {
          if (value) return true;
          return "Name is required.";
        },
        (value: string | null | undefined) => {
          if (value && value.length <= 10) return true;
          return "Name must be less than 10 characters.";
        },
      ],
      correo: null,
      emailRules: [
        (value: string | null | undefined) => {
          if (value) return true;
          return "E-mail is required.";
        },
        (value: string | null | undefined) => {
          if (value && /.+@.+\..+/.test(value)) return true;
          return "E-mail must be valid.";
        },
      ],
      telefono: null,
      phoneRules: [
        (value: string | null | undefined) => {
          if (value && /^\d{10}$/.test(value)) return true;
          return "El número de teléfono debe tener 10 dígitos.";
        },
        (value: string | null | undefined) => {
          if (value) return true;
          return "El número de teléfono es requerido.";
        },
      ],
      edad: null,
      edadRules: [
        (value: string | null | undefined) => {
          if (value && /^\d+$/.test(value) && parseInt(value) >= 10)
            return true;
          return "La edad debe ser un número mayor o igual a 10.";
        },
        (value: string | null | undefined) => {
          if (value) return true;
          return "La edad es requerida.";
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
       console.log({
            nombre:this.nombre,
            apellidos:this.apellidos,
            correo:this.correo,
            telefono: this.telefono,
            edad: this.edad,
            usuario: this.usuario,
            password: this.password,
            periodoTipo:this.periodoTipo,
            cicloDuracion: this.cicloDuracion,
            cicloFrecuencia: this.cicloFrecuencia,
            cicloFlujo: this.cicloFlujo,
            cicloHumor: this.cicloHumor ,
            cicloMalestar:this.cicloMalestar,
            cicloSexo:this.cicloSexo
          })

        
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/v1/auth/registro",
          {
            nombre:this.nombre,
            apellidos:this.apellidos,
            correo:this.correo,
            telefono: this.telefono,
            edad: this.edad,
            usuario: this.usuario,
            password: this.password,
            periodoTipo:this.periodoTipo,
            cicloDuracion: this.cicloDuracion,
            cicloFrecuencia: this.cicloFrecuencia,
            cicloFlujo: this.cicloFlujo,
            cicloHumor: this.cicloHumor ,
            cicloMalestar:this.cicloMalestar,
            cicloSexo:this.cicloSexo
          }
        );

        const { data, token, status, message } = response.data;

        if (status) {
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
    required(v: string) {
      return !!v || "El Campo es requerido";
    },
  },
};
</script>
<style>
.overflow-y-auto {
  overflow-y: auto;
}
</style>

<template>
  <v-container class="d-flex flex-row align-center">
    <v-card
      style="width: 200px; height: 680px"
      color="#F097D8"
      class="text-center"
    >
      <v-avatar style="margin-top: 10px" image="./logo2.png" size="150" />
    </v-card>
    <v-card style="width: 1000px; height: 680px" class="text-center">
      <v-img class="mx-auto my-6" max-width="228" src="./titulo.png" />
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-container class="overflow-y-auto" style="max-height: 600px">
          <v-card
            class="mx-auto pa-12 pb-8"
            elevation="2"
            max-width="1200"
            rounded="lg"
          >
            <v-card-subtitle>Datos Personales</v-card-subtitle>
            <v-row style="margin-top: 20px">
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="nombre"
                  :counter="10"
                  :rules="nameRules"
                  label="Nombre(s)"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="apellidos"
                  :counter="10"
                  :rules="nameRules"
                  label="Apellido(s)"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="usuario"
                  :rules="nameRules"
                  prepend-inner-icon="mdi-account"
                  label="Nombre de Usuario"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="correo"
                  :rules="emailRules"
                  label="E-mail"
                  prepend-inner-icon="mdi-email-outline"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="edad"
                  :counter="10"
                  :rules="nameRules"
                  label="Edad"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="telefono"
                  :counter="10"
                  :rules="phoneRules"
                  prepend-inner-icon="mdi-dialpad"
                  label="Telefono"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="password"
                  :counter="10"
                  :rules="passwordRules"
                  label="Password"
                  prepend-inner-icon="mdi-lock-outline"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
          <v-card
            class="mx-auto pa-12 pb-8"
            elevation="2"
            max-width="1200"
            rounded="lg"
            style="margin-top: 20px"
          >
            <v-card-subtitle>Datos Del Ciclo</v-card-subtitle>

            <v-radio-group inline label="Tu perdio es..." v-model="periodoTipo" >
              <v-radio label="Regular" value="one" color="error"></v-radio>
              <v-radio label="Irregular" value="two" color="error"></v-radio>
              <v-radio label="No lo se" value="three" color="error"></v-radio>
            </v-radio-group>

            <v-radio-group inline label="¿Cuanto dura tu ciclo?" v-model="cicloDuracion">
              <v-radio label="2 a 3 dias" value="one" color="error"></v-radio>
              <v-radio label="4 a 5 dias" value="two" color="error"></v-radio>
              <v-radio
                label="7 dias o mas"
                value="three"
                color="error"
              ></v-radio>
            </v-radio-group>

            <v-radio-group inline label="¿Cada cuanto se presenta tu ciclo?"  v-model="cicloFrecuencia">
              <v-radio label="28 dias" value="one" color="error"></v-radio>
              <v-radio label="24 dias" value="two" color="error"></v-radio>
              <v-radio label="36 dias" value="three" color="error"></v-radio>
            </v-radio-group>

            <v-radio-group inline label="¿Que tipo de flujo tienes?" v-model="cicloFlujo" >
              <v-radio label="Abundante" value="one" color="error"></v-radio>
              <v-radio label="Regular" value="two" color="error"></v-radio>
              <v-radio label="otro" value="three" color="error"></v-radio>
            </v-radio-group>

            <v-radio-group inline label="¿Presentas cambios de humor?"  v-model="cicloHumor">
              <v-radio
                label="Si, me afecta en mi dia"
                value="one"
                color="error"
              ></v-radio>
              <v-radio
                label="No, todo esta bien"
                value="two"
                color="error"
              ></v-radio>
              <v-radio
                label="No se identificarlos"
                value="three"
                color="error"
              ></v-radio>
            </v-radio-group>

            <v-radio-group
              inline
              label="¿Tienes algun malestar durante tu ciclo?"
              v-model="cicloMalestar">
              <v-radio label="Si" value="one" color="error"></v-radio>
              <v-radio label="No" value="two" color="error"></v-radio>
            </v-radio-group>

            <v-radio-group inline label="¿Eres activamente sexual?" v-model="cicloSexo">
              <v-radio label="Si" value="one" color="error"></v-radio>
              <v-radio label="No" value="two" color="error"></v-radio>
            </v-radio-group>

            <v-btn class="ma-2">
              <v-icon icon="mdi-arrow-left" color="red" start></v-icon>
              Regresar
            </v-btn>

            <v-btn class="ma-2" @click="onSubmit">
              <v-icon icon="mdi-check-circle"  
              color="success"
                ></v-icon>
              Guardar
            </v-btn>


          </v-card>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>
