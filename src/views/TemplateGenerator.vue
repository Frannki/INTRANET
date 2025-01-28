<template>
  <div class="template-generator">
    <Panel header="Generar Reporte">
      <form @submit.prevent="submitForm">
        <div class="p-fluid">
          <!-- Campo: Nombre -->
          <div class="p-field">
            <label for="nombre">Nombre</label>
            <InputText id="nombre" v-model="form.nombre" placeholder="Ingresa tu nombre" />
          </div>

          <!-- Campo: Fecha -->
          <div class="p-field">
            <label for="fecha">Fecha</label>
            <Calendar id="fecha" v-model="form.fecha" dateFormat="dd/mm/yy" />
          </div>

          <!-- Campo: Descripción -->
          <div class="p-field">
            <label for="descripcion">Descripción</label>
            <Textarea
                id="descripcion"
                v-model="form.descripcion"
                placeholder="Describe el propósito del reporte"
                rows="4"
            />
          </div>

          <!-- Botón de envío -->
          <Button label="Enviar Datos" icon="pi pi-send" type="submit" class="p-mt-2" />
        </div>
      </form>
    </Panel>
  </div>
</template>

<script>
import Panel from "primevue/panel";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
//import axios from "axios";

export default {
  components: { Panel, InputText, Textarea, Button, Calendar },
  data() {
    return {
      form: {
        nombre: "",
        fecha: null,
        descripcion: "",
      },
    };
  },
  methods: {
    async submitForm() {
      // Validación básica
      if (!this.form.nombre || !this.form.fecha || !this.form.descripcion) {
        alert("Por favor completa todos los campos.");
        return;
      }

      // Preparar datos en formato JSON
      const payload = {
        nombre: this.form.nombre,
        fecha: this.form.fecha,
        descripcion: this.form.descripcion,
      };

      try {
        // Simulación de envío al backend (ajusta la URL según tu backend)
        const response = await axios.post("http://localhost:8080/api/reportes", payload);
        alert("Reporte enviado con éxito.");
        console.log("Respuesta del servidor:", response.data);
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert("Ocurrió un error al enviar los datos.");
      }

    },
  },
};
</script>

<style>
.template-generator {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.p-field label {
  font-weight: bold;
}

@media (max-width: 768px) {
  .template-generator {
    padding: 0.5rem;
  }
}
</style>
