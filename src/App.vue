<template>
  <div id="app">
    <MegaMenu :model="menuItems" class="p-4">
      <template #start>
        <img src="../src/assets/logo.png" alt="Logo HCL" class="logo"/>
      </template>
      <template #end>
        <div class="user-section">
            <a class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase"
                style="border-radius: 2rem"  @click="logout"> <span> {{ user.name }} </span>
            </a>
        </div>
      </template>
    </MegaMenu>
    <main class="app-content">
      <router-view/>
    </main>
  </div>
</template>
<script>
import MegaMenu from "primevue/megamenu";
import Button from "primevue/button";

export default {
  components: { MegaMenu, Button },
  data() {
    return {
      user: {
        name: "Frank",
      },
      menuItems: [
        { label: "Inicio", icon: "pi pi-home", command: () => this.$router.push("/") },
        {
          label: "Documentos", icon: "pi pi-folder", command: () => this.$router.push("/documentos"),
        },
        { label: "Plantillas", icon: "pi pi-file", command: () => this.$router.push("/plantillas") },
        { label: "Usuarios", icon: "pi pi-users", command: () => this.$router.push("/usuarios") },
        { label: "Login", icon: "pi pi-user", command: () => this.$router.push("/login") },
        { label: "Youtube", icon: "pi pi-user", command: () => this.$router.push("/youtube") },
      ],
    };
  },
  methods: {
    logout() {
      alert("Sesión cerrada");
      this.$router.push("/");
    },
  },
};
</script>
<style>
/* Estilos para el MegaMenu */
.app-header {
  width: 100%;
  background-color: #007ad9;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 50px;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-content {
  flex: 1;
  width: 100%;
  padding: 1rem;
  background-color: rgb(166, 169, 172);
}


</style>