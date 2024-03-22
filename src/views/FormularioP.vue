<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
    export default {
        data() {
        return {
                ex4: ['error'],
                valid: false,
                usuario:'',
                firstname: '',
                lastname: '',
                nameRules: [
                    (value: string | null | undefined) => {
                        if (value) return true;
                        return 'Name is required.';
                    },
                    (value: string | null | undefined) => {
                        if (value && value.length <= 10) return true;
                        return 'Name must be less than 10 characters.';
                    },
                ],
                email: '',
                emailRules: [
                    (value: string | null | undefined) => {
                        if (value) return true;
                        return 'E-mail is required.';
                    },
                    (value: string | null | undefined) => {
                        if (value && /.+@.+\..+/.test(value)) return true;
                        return 'E-mail must be valid.';
                    },                
                ],  
                phone:'',
                phoneRules: [
                    (value: string | null | undefined) => {
                    if (value && /^\d{10}$/.test(value)) return true;
                    return 'El número de teléfono debe tener 10 dígitos.';
                    },
                    (value: string | null | undefined) => {
                    if (value) return true;
                    return 'El número de teléfono es requerido.';
                    },
                ], 
                edad: '',
                edadRules: [
                    (value: string | null | undefined) => {
                    if (value && /^\d+$/.test(value) && parseInt(value) >= 10) return true;
                    return 'La edad debe ser un número mayor o igual a 10.';
                    },
                    (value: string | null | undefined) => {
                    if (value) return true;
                    return 'La edad es requerida.';
                    }
                ]       
            };            
        
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
        <v-card style="width: 200px; height: 680px;" color="#F097D8" class="text-center">
            <v-avatar style="margin-top: 10px;"  image="./logo2.png" size="150"/>
        </v-card>
        <v-card style="width: 1000px; height: 680px;" class="text-center">
            <v-img
                class="mx-auto my-6"
                max-width="228"
                src="./titulo.png"
            />   
                <v-form v-model="valid"> 
                    <v-container class="overflow-y-auto" style="max-height: 600px;">
                            <v-card class="mx-auto pa-12 pb-8" elevation="2" max-width="1200" rounded="lg">
                                <v-card-subtitle>Datos Personales</v-card-subtitle> 
                                <v-row style="margin-top: 20px;">
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="firstname"
                                            :counter="10"
                                            :rules="nameRules"
                                            label="Nombre(s)"
                                            hide-details
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="lastname"
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
                                            v-model="email"
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
                                            v-model="phone"
                                            :counter="10"
                                            :rules="phoneRules"
                                            prepend-inner-icon="mdi-dialpad"
                                            label="Telefono"
                                            hide-details
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                        </v-card>
                        <v-card class="mx-auto pa-12 pb-8"
                                        elevation="2"
                                        max-width="1200"
                                        rounded="lg"
                                        style="margin-top: 20px;" >

                                        <v-card-subtitle>Datos Del Ciclo</v-card-subtitle>

                                        <v-radio-group inline label="Tu perdio es...">
                                            <v-radio label="Regular" value="one" color="error"></v-radio>
                                            <v-radio label="Irregular" value="two" color="error"></v-radio>
                                            <v-radio label="No lo se" value="three" color="error"></v-radio>
                                        </v-radio-group>

                                        <v-radio-group inline label="¿Cuanto dura tu ciclo?">
                                            <v-radio label="2 a 3 dias" value="one" color="error"></v-radio>
                                            <v-radio label="4 a 5 dias" value="two" color="error"></v-radio>
                                            <v-radio label="7 dias o mas" value="three" color="error"></v-radio>
                                        </v-radio-group>

                                        
                                        <v-radio-group inline label="¿Cada cuanto se presenta tu ciclo?">
                                            <v-radio label="28 dias" value="one" color="error"></v-radio>
                                            <v-radio label="24 dias" value="two" color="error"></v-radio>
                                            <v-radio label="36 dias" value="three" color="error"></v-radio>
                                        </v-radio-group>

                                        <v-radio-group inline label="¿Que tipo de flujo tienes?">
                                            <v-radio label="Abundante" value="one" color="error"></v-radio>
                                            <v-radio label="Regular" value="two" color="error"></v-radio>
                                            <v-radio label="otro" value="three" color="error"></v-radio>
                                        </v-radio-group>

                                        <v-radio-group inline label="¿Presentas cambios de humor?">
                                            <v-radio label="Si, me afecta en mi dia" value="one" color="error"></v-radio>
                                            <v-radio label="No, todo esta bien" value="two" color="error"></v-radio>
                                            <v-radio label="No se identificarlos" value="three" color="error"></v-radio>
                                        </v-radio-group>

                                        <v-radio-group inline label="¿Tienes algun malestar durante tu ciclo?">
                                            <v-radio label="Si" value="one" color="error"></v-radio>
                                            <v-radio label="No" value="two" color="error"></v-radio>
                                        </v-radio-group>

                                        <v-radio-group inline label="¿Eres activamente sexual?">
                                            <v-radio label="Si" value="one" color="error"></v-radio>
                                            <v-radio label="No" value="two" color="error"></v-radio>
                                        </v-radio-group>
                                    <v-btn
                                        prepend-icon="mdi-check-circle"
                                        >
                                        <template v-slot:prepend>
                                            <v-icon color="success"></v-icon>
                                        </template>

                                        Guardar

                                        <template v-slot:append>
                                            <v-icon color="warning"></v-icon>
                                        </template>
                                    </v-btn>
                                </v-card>     
                        </v-container>
                </v-form>
        </v-card>
    </v-container>
</template>