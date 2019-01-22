<template>
  <div>
    <button @click="show = !show">
      <h1>Sizing</h1>
    </button>
    <div v-if="show" class="rulesWrap">
      <div>
        <h1>Width : {{ width }} px</h1>
        <input type="range" min="0" max="200" v-model="width">
      </div>
      <div>
        <h1>Height : {{ height }} px</h1>
        <input type="range" min="0" max="200" v-model="height">
      </div>
      <div>
        <h1>Border : {{ border }} px</h1>
        <input type="range" min="0" max="80" v-model="border">
      </div>
      <div>
        <h1>Border Radius : {{ borderradius }} px</h1>
        <input type="range" min="0" max="100" v-model="borderradius">
      </div>
      <div>
        <h1>Border Style</h1>
        <select v-model="borderstyle">
          <option value="solid" selected>Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
          <option value="inset">Inset</option>
          <option value="outset">Outset</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  computed: {
    width: {
      get() {
        return this.$store.state.width;
      },
      set(value) {
        this.$store.commit("WIDTH_COMMIT", value);
      }
    },
    height: {
      get() {
        return this.$store.state.height;
      },
      set(value) {
        this.$store.commit("HEIGHT_COMMIT", value);
      }
    },
    border: {
      get() {
        return this.$store.state.border;
      },
      set(value) {
        this.$store.commit("BORDER_COMMIT", value);
      }
    },
    borderradius: {
      get() {
        return this.$store.state.borderradius;
      },
      set(value) {
        this.$store.commit("BORDERRADIUS_COMMIT", value);
      }
    },
    borderstyle: {
      get() {
        return this.$store.state.borderstyle;
      },
      set(value) {
        this.$store.commit("BORDERSTYLE_COMMIT", value);
      }
    }
  }
};
</script>