<template>
  <div class="panel_documentos">
    <Splitter style="height: auto">
      <!-- Panel izquierdo con el menú -->
      <SplitterPanel
        class="flex items-center justify-center"
        :size="25"
        :minSize="15"
      >
        <div class="card flex justify-center">
          <PanelMenu :model="items" class="w-full md:w-80" />
        </div>
      </SplitterPanel>

      <!-- Panel derecho vacío para contenido futuro -->
      <SplitterPanel class="flex items-center justify-center" :size="75">
        <div class="panelMenu">
          <div style="flex" v-if="selectedDocument">
          <iframe :src="selectedDocument" frameborder="0"style="width: 100%; height: 500px;"
                ></iframe>
              </div>
              <div v-else>
                <p>Selecciona un documento del índice para verlo aquí.</p>
              </div>
            </div>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script>
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import PanelMenu from "primevue/panelmenu";

export default {
  name: "MenuSplitter",
  components: { Splitter, SplitterPanel, PanelMenu },
  data() {
    return {
      selectedDocument: "../src/assets/Xerox Scan.PDF", // URL del documento seleccionado
      items: [
        {
          label: "Documents",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Work",
              icon: "pi pi-fw pi-file",
              items: [
                { label: "Expenses.doc", icon: "pi pi-fw pi-file" },
                { label: "Resume.doc", icon: "pi pi-fw pi-file" },
              ],
            },
            {
              label: "Home",
              icon: "pi pi-fw pi-file",
              items: [{ label: "Invoices.txt", icon: "pi pi-fw pi-file" }],
            },
          ],
        },
        {
          label: "Events",
          icon: "pi pi-fw pi-calendar",
          items: [
            { label: "Meeting", icon: "pi pi-fw pi-calendar-plus" },
            { label: "Product Launch", icon: "pi pi-fw pi-calendar-plus" },
            { label: "Report Review", icon: "pi pi-fw pi-calendar-plus" },
          ],
        },
      ],
    };
  },
};
</script>

<style>


</style>
