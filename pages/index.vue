<template>
  <div>
    <component :is="layoutFile">
      <template v-for="component in components" v-slot:[component.slot]>
        <component :is="component.file" :key="component.id"/>
        <!-- Uncomment below to fix -->
        <!-- <template />  -->
      </template>
    </component>
  </div>
</template>

<script>
import fetchPageData from "@/fetchPageData.js";
export default {
  data() {
    return { pageData: null };
  },
  methods: {
    importComponent({ name }) {
      return () => import(`@/components/${name}`);
    }
  },
  computed: {
    layoutFile() {
      return () => import(`@/dynamicLayouts/Layout${this.pageData.layout}`);
    },
    components() {
      return this.pageData.slots.flatMap(slot =>
        slot.components.map(component => ({
          ...component,
          slot: slot.name,
          file: this.importComponent(component)
        }))
      );
    }
  },
  async asyncData() {
    const pageData = await fetchPageData();
    return { pageData };
  }
};
</script>
