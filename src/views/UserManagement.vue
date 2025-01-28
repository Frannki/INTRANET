<template>
  <div class="user-management">
    <Panel header="Gestión de Usuarios">
      <!-- Botón para agregar usuario -->
      <div class="p-mb-2">
        <Button label="Agregar Usuario" icon="pi pi-plus" class="p-button-success" @click="openNewUserDialog" />
      </div>

      <!-- Tabla de usuarios -->
      <DataTable :value="users" :paginator="true" :rows="5" :responsiveLayout="'scroll'" selectionMode="single" @row-select="onUserSelect">
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="correo" header="Correo" />
        <Column field="rol" header="Rol" />
        <!-- Slot personalizado para acciones -->
        <Column header="Acciones">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="p-button-text" @click="editUser(slotProps.data)" />
            <Button icon="pi pi-trash" class="p-button-text p-button-danger" @click="deleteUser(slotProps.data.id)" />
          </template>
        </Column>
      </DataTable>
    </Panel>

    <!-- Diálogo para agregar/editar usuario -->
    <Dialog :visible="userDialog" header="Usuario" modal @hide="hideUserDialog">
      <form @submit.prevent="saveUser">
        <div class="p-fluid">
          <div class="p-field">
            <label for="nombre">Nombre</label>
            <InputText id="nombre" v-model="selectedUser.nombre" required />
          </div>
          <div class="p-field">
            <label for="correo">Correo</label>
            <InputText id="correo" v-model="selectedUser.correo" required />
          </div>
          <div class="p-field">
            <label for="rol">Rol</label>
            <Dropdown id="rol" v-model="selectedUser.rol" :options="roles" optionLabel="label" optionValue="value" placeholder="Selecciona un rol" />
          </div>
        </div>
        <div class="p-mt-2">
          <Button label="Guardar" icon="pi pi-check" class="p-button-success p-mr-2" type="submit" />
          <Button label="Cancelar" icon="pi pi-times" class="p-button-secondary" @click="hideUserDialog" />
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script>
import Panel from "primevue/panel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import { PrimeIcons } from '@primevue/core/api';

export default {
  components: { Panel, DataTable, Column, Button, Dialog, InputText, Dropdown, PrimeIcons },
  data() {
    return {
      users: [],
      selectedUser: null,
      userDialog: false,
      roles: [
        { label: "Administrador", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "Visor", value: "viewer" },
      ],
      isEdit: false,
    };
  },
  methods: {
    openNewUserDialog() {
      this.selectedUser = { id: null, nombre: "", correo: "", rol: "" };
      this.isEdit = false;
      this.userDialog = true;
    },
    hideUserDialog() {
      this.userDialog = false;
    },
    saveUser() {
      if (this.isEdit) {
        const index = this.users.findIndex((u) => u.id === this.selectedUser.id);
        if (index !== -1) {
          this.users[index] = { ...this.selectedUser };
        }
      } else {
        this.selectedUser.id = this.users.length + 1;
        this.users.push({ ...this.selectedUser });
      }
      this.userDialog = false;
    },
    onUserSelect(event) {
      this.selectedUser = { ...event.data };
      this.isEdit = true;
      this.userDialog = true;
    },
    editUser(user) {
      this.selectedUser = { ...user };
      this.isEdit = true;
      this.userDialog = true;
    },
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
  },
};
</script>

<style>
.user-management {
  padding: 1rem;
}
.p-field label {
  font-weight: bold;
}

.p-mt-2 {
  margin-top: 1rem;
}
</style>
