<template>
  <div>
    <Card #content>
      <h2 class="title">form</h2>
      <InputText v-model="value" />
      <InputMask v-model="value" mask="9999-99999"/>
      <MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" />
      <Button class="custom" label="Send" />
       <P header="Header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </P>

        <DataTable :value="items">
            <Column field="vin" header="Vin"></Column>
            <Column field="year" header="Year"></Column>
            <Column field="brand" header="Brand"></Column>
            <Column field="color" header="Color"></Column>
        </DataTable>
    </Card>
  </div>
</template>

<script>
import Panel from 'primevue/panel';
export default {
    name: 'Form',
    components:{
        'P': Panel,
    },
    data() {
        return {
            selectedCars: null,
            cars: [
                {brand: 'Audi', value: 'Audi'},
                {brand: 'BMW', value: 'BMW'},
                {brand: 'Fiat', value: 'Fiat'},
                {brand: 'Honda', value: 'Honda'},
                {brand: 'Jaguar', value: 'Jaguar'},
                {brand: 'Mercedes', value: 'Mercedes'},
                {brand: 'Renault', value: 'Renault'},
                {brand: 'Volkswagen', value: 'Volkswagen'},
                {brand: 'Volvo', value: 'Volvo'}
            ],
            "items": [
                {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
                {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
                {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
                {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
                {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
                {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
                {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
                {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
                {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
                {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
            ],
            value:''
        }
    },
};
</script>

<style  scoped>
.custom{
    background: red;
}
</style>
