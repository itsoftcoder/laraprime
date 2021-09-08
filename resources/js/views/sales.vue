<template>
    <div>
        <Card>
            <template #content>
                <div v-for="(item,id) in items" :key="id">
                    <input type="text" v-model="item.name">
                     <input type="number" v-model="item.quantity">
                      <input type="email" v-model="item.email">
                    <button @click ="remove(id)"> - </button>
                </div>
             <button @click="add">+</button>
             </template>
        </Card>
    </div>
</template>

<script>
export default {
name:'Sale',
    data() {
        return {
            items:[
                {name:'',quantity:'',email:''},
            ]
         
        }
    },

  methods:{
      add(){
          this.items.push({name :'',quantity:'',email:''})
      },
      remove(id){
          this.items.splice(id,1)
      },
    

  },
}
</script>