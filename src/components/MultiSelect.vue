<template>
  <div class="wrapper">
    <div>
        <div @click="toogle" class="button">
          <div class="pi pi-angle-down" :class="{'pi-angle-down': !isShowList, 'pi-angle-up': isShowList}"></div>
          <div v-if="selectedCities.length == 0">Выбирите город </div>
          <div v-else class="selected_cities">
            <div>
              <span  v-for="city in selectedCities"> <span style="margin-right: 3px;">{{city.name}}</span> </span>
            </div>
            <span class="pi pi-times" style="color: #f44336; cursor:pointer;" @click.stop="clearSelection"></span>
          </div>
        </div>

        <div id="myDropdown" class="dropdown-content">
          <transition-group name="fade">
            <div :key="key"  v-for="(city, key) in options" class="menu">
              <label class=" menu__item d-flex justify-content-between ">
                <input type="checkbox" v-model="city.checked">
                <p>{{ city.name }}</p>
              </label>
            </div>
          </transition-group>
        </div>
    </div>
  </div>



</template>

<script lang="ts">
import MultiSelect from 'primevue/multiselect';
import {computed, defineComponent, ref} from "vue";
export default defineComponent
({
  components: {
    MultiSelect
  },

  setup() {
    interface City {
      name: string;
      code: string;
      checked: boolean;
    }

    const isShowList = ref<boolean>(false);
    const options = ref<City[]>([
      {name: 'Australia', code: 'AU', checked: false},
      {name: 'Brazil', code: 'BR', checked: false},
      {name: 'China', code: 'CN', checked: false},
      {name: 'Egypt', code: 'EG', checked: false},
      {name: 'France', code: 'FR', checked: false},
      {name: 'Germany', code: 'DE', checked: false},
      {name: 'India', code: 'IN', checked: false},
      {name: 'Japan', code: 'JP', checked: false},
      {name: 'Spain', code: 'ES', checked: false},
      {name: 'United States', code: 'US', checked: false}
    ]);

    const selectedCities = computed(() => {
      return options.value.filter(city => city.checked);
    });

    const clearSelection = () => {
      options.value.forEach(city => {
        city.checked = false;
      });
    };

    const toogle = () => {
      isShowList.value = !isShowList.value;
      const elementDropdown = document.getElementById("myDropdown");
      if (elementDropdown) {
        elementDropdown.classList.toggle("show");
      }
    }

    return {
      selectedCities,
      options,
      isShowList,
      clearSelection,
      toogle
    }
  }
})
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
}

.button {
  min-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
}

.selected_cities {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 5px;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 40px;
  background-color: rgba(0, 0, 0, 0);
  min-width: 160px;
  z-index: 1;

  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
}

.show {
  display: block;
}

.menu__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 12px;
    cursor: pointer;
}

.menu__item:hover {
  transform: scale(98%);
}
</style>