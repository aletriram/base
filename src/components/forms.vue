<template>
</template>


<script lang="ts">
	export default {
		el:'form',
		data:{
			errors: [],
		},
		methods:{
			checkForm:function(e: any) {
				// this.errors = [];
				console.log('hola');
				e.preventDefault();
			}
		}
	};
</script>


<style scoped>
</style>

