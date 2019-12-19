<template>
    <div class="data-table">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column" class="table-head">
                        {{ column}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-if="tableData.length === 0">
                    <td class="" :colspan="columns.length + 1">No data found</td>
                </tr>
                <tr v-for="data in tableData" :key="data.id" class="" v-else>
                    <!-- <td>{{data}}</td> -->
                    <td >{{ data.idEmployer }}</td>
                    <td >{{ data.nom }}</td>
                    <td >{{ data.prenom }}</td>
                    <td >{{ data.sexe }}</td>
                    <td >{{ data.date_de_naissance }}</td>
                    <td >{{ data.email }}</td>
                    <!-- <td >{{ data.password }}</td> -->
                    <td >{{ data.adresse }}</td>
                    <td >{{ data.salaire }}</td>
                    <td >{{ data.telephone }}</td>
                    <td >{{ data.poste }}</td>
                    <td >{{ data.qualification }}</td>
                    <td >{{ data.admin }}</td>
                    <td >{{ data.idMagasin }}</td>
                    <td><button v-on:click="findelete(data.idEmployer)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'DataTable',
    props: {
        fetchUrl: {type: String, required: true},
        columns: {type: Array, required: true},
    },
    data() {
        return {
            tableData: {}
        }
    },
    created() {
        return this.fetchData(this.fetchUrl)
    },
    methods: {
        fetchData(url) {
            this.axios.get(url)
            .then(res => {
                this.tableData = res.data
                console.log(res.data);
            })
        },
   
findelete: function (id) {
    var url = this.fetchUrl.split('/');
    var lastSegment = url.pop() || url.pop();
    url = this.fetchUrl.replace(lastSegment,"delete/"+id);
    console.log(url);

            this.axios.delete(url).then((response) => {
                alert(response.data)
                this.fetchData(this.fetchUrl);
                console.log(response.data);
            });
        },
},
    };
</script>

<style scoped>
table {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
th{
    width: 100px;
    height: 50px;
    /* display: flex;
    flex-wrap: wrap; */
    background-color: aqua;
}
tbody{
    /* width: 100px; */
    height: 50px;
    vertical-align: center;
     /* display: flex;
    flex-wrap: wrap; */
}
td{
    height: 50px;
    vertical-align: center;
    /* display: flex;
    flex-wrap: wrap; */
}

</style>