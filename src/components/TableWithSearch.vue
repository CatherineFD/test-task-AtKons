<script lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {computed, defineComponent, ref, onMounted} from "vue";
import MultiSelect from 'primevue/multiselect';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';

interface ProductObject {
  code: string;
  name: string;
  img: string;
  price: number;
  category: string;
  reviews: number;
  status: string;
}
export default defineComponent({
  components: {
    DataTable,
    Column,
    MultiSelect,
    InputGroup,
    InputText
  },
  setup() {
    const globalFilter = ref('');
    const sortedField = ref<string[]>([]);
    const fieldOptions = ref<{ name: string; value: string }[]>([
      {name: 'Code', value:'code'},
      {name: 'Name', value: 'name'},
      {name: 'Image', value: 'img'},
      {name: 'Price', value: 'price'},
      {name: 'Category', value: 'category'},
      {name: 'Reviews', value: 'reviews'},
      {name: 'Status', value: 'status'}
    ]);

    const products = ref<ProductObject[]>([
      {
        code: '001',
        name: 'Product 1',
        img: './assets/img/EPy-4lhX0AU26TI.jpg',
        price: 29.99,
        category: 'Category A',
        reviews: 5,
        status: 'INSTOCK'
      },
      {
        code: '002',
        name: 'Product 2',
        img: 'path/to/image2.jpg',
        price: 49.99,
        category: 'Category B',
        reviews: 4,
        status: 'LOWSTOCK'
      },
      {
        code: '003',
        name: 'Product 3',
        img: 'path/to/image3.jpg',
        price: 39.99,
        category: 'Category A',
        reviews: 5,
        status: 'OUTOFSTOCK'
      },
      {
        code: '004',
        name: 'Product 4',
        img: 'path/to/image4.jpg',
        price: 59.99,
        category: 'Category C',
        reviews: 5,
        status: 'LOWSTOCK'
      },
      {
        code: '005',
        name: 'Product 5',
        img: 'path/to/image5.jpg',
        price: 19.99,
        category: 'Category B',
        reviews: 3.5,
        status: 'LOWSTOCK'
      },
      {
        code: '001',
        name: 'Product 1',
        img: 'path/to/image1.jpg',
        price: 29.99,
        category: 'Category A',
        reviews: 2,
        status: 'INSTOCK'
      },
      {
        code: '002',
        name: 'Product 2',
        img: 'path/to/image2.jpg',
        price: 49.99,
        category: 'Category B',
        reviews: 5,
        status: 'OUTOFSTOCK'
      },
      {
        code: '003',
        name: 'Product 3',
        img: 'path/to/image3.jpg',
        price: 39.99,
        category: 'Category A',
        reviews: 4,
        status: 'INSTOCK'
      },
      {
        code: '004',
        name: 'Product 4',
        img: 'path/to/image4.jpg',
        price: 59.99,
        category: 'Category C',
        reviews: 3,
        status: 'INSTOCK'
      },
      {
        code: '005',
        name: 'Product 5',
        img: 'path/to/image5.jpg',
        price: 19.99,
        category: 'Category B',
        reviews: 2,
        status: 'OUTOFSTOCK'
      },
      {
        code: '001',
        name: 'Product 1',
        img: 'path/to/image1.jpg',
        price: 29.99,
        category: 'Category A',
        reviews: 4,
        status: 'INSTOCK'
      },
      {
        code: '002',
        name: 'Product 2',
        img: 'path/to/image2.jpg',
        price: 49.99,
        category: 'Category B',
        reviews: 5,
        status: 'OUTOFSTOCK'
      },
      {
        code: '003',
        name: 'Product 3',
        img: 'path/to/image3.jpg',
        price: 39.99,
        category: 'Category A',
        reviews: 2,
        status: 'INSTOCK'
      },
      {
        code: '004',
        name: 'Product 4',
        img: 'path/to/image4.jpg',
        price: 59.99,
        category: 'Category C',
        reviews: 1,
        status: 'INSTOCK'
      },
      {
        code: '005',
        name: 'Product 5',
        img: 'path/to/image5.jpg',
        price: 19.99,
        category: 'Category B',
        reviews: 5,
        status: 'INSTOCK'
      }
  ]);


    const filteredProducts = ref<ProductObject[]>([]);

    const filterProducts = () => {
      const selectedFields = sortedField.value;
      filteredProducts.value = products.value.filter(product => {
        return (
            (selectedFields.length === 0 || selectedFields.some(field => product[field as keyof ProductObject]?.toString().toLowerCase().includes(globalFilter.value.toLowerCase()))) &&
            (globalFilter.value === '' || Object.values(product).some(value => value.toString().toLowerCase().includes(globalFilter.value.toLowerCase())))
        );
      });
    };

    const clearFilter = () => {
      globalFilter.value = '';
      sortedField.value = [];
      filterProducts();
    };

    const totalRecords = computed(() => filteredProducts.value.length);

    onMounted(() => {
      filteredProducts.value = [...products.value];
    });

    return {
      sortedField,
      globalFilter,
      totalRecords,
      filterProducts,
      fieldOptions,
      filteredProducts,
      clearFilter
    }
  },
  methods: {
    getStatusClass(status: string) {
      switch (status) {
        case 'INSTOCK':
          return 'btn-green';
        case 'OUTOFSTOCK':
          return 'btn-red';
        case 'LOWSTOCK':
          return 'btn-yellow';
        default:
          return '';
      }
    },
    getStars(reviews: number) {
      const fullStar = '<i class="pi pi-star-fill" style="color: gold;"></i>';
      const halfStar = '<i class="pi pi-star-fill" style="color: gold; clip-path: inset(0 50% 0 0);"></i>';
      const emptyStar = '<i class="pi pi-star" style="color: gold;"></i>';

      let starsHtml = '';
      const fullStars = Math.floor(reviews);
      const hasHalfStar = reviews % 1 !== 0;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

      starsHtml += fullStar.repeat(fullStars);
      if (hasHalfStar) {
        starsHtml += halfStar;
      }
      starsHtml += emptyStar.repeat(emptyStars);

      return starsHtml;
    },
    getImagePath(imageName: string) {
      return new URL(`../assets/img/${imageName}`, import.meta.url).href;
    }
  },
  name: "TableWithSearch"
})

</script>

<template>
  <div class="wrapper">
    <InputGroup>
      <div class="" style="width: 80%; display: flex; justify-content: space-between; position: relative">
        <div style="width: 100%; position: relative">
          <InputText v-model="globalFilter" placeholder="Поиск..." style="width: 100%"/>
          <span v-if="globalFilter" class="clear-icon pi pi-times" @click="clearFilter"></span>
        </div>
        <button class="button__search" @click="filterProducts">Search</button>
      </div>
      <MultiSelect
          v-model="sortedField"
          :options="fieldOptions"
          optionLabel="name"
          optionValue="value"
          placeholder="Поля таблицы"
      ></MultiSelect>
    </InputGroup>

    <DataTable
        :value="filteredProducts"
        :paginator="true"
        :rows="10"
        :globalFilter="globalFilter"
        :totalRecords="totalRecords"
        :rows-per-page-options="[5, 10, 15, 20, 50]"
    >
      <Column field="code" header="Code" sortable="true"></Column>
      <Column field="name" header="Name" sortable="true"></Column>
      <Column field="img" header="Image">
        <template #body="slotProps">
          <img :src="getImagePath(slotProps.data.img)" alt="img">
        </template>
      </Column>
      <Column field="price" header="Price" sortable="true">
        <template #body="slotProps">
          ${{ slotProps.data.price.toFixed(2) }}
        </template>
      </Column>
      <Column field="category" header="Category" sortable="true"></Column>
      <Column field="reviews" header="Reviews" sortable="true">
        <template #body="slotProps">
          <span v-html="getStars(slotProps.data.reviews)"></span>
        </template>
      </Column>

      <Column field="status" header="Status" sortable="true">
        <template #body="slotProps">
          <div class="btn" :class="getStatusClass(slotProps.data.status)">
            {{ slotProps.data.status }}
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  margin: 20px auto 0;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
}

.button__search {
  border-radius: 0 5px 5px 0;
  background-color: #6d74ff;
}

.clear-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.2em;
  color: #999;
  pointer-events: auto;
  transition: color 0.2s ease;
}

.clear-icon:hover {
  color: #333;
}

.btn {
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
}

.btn-green {
  background-color: #77cb77;

}

.btn-red {
  background-color: #e24747;
}

.btn-yellow {
  background-color: #e5e25c;

}
</style>