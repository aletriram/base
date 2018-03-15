<template>
	<div id="contacto">
		<form id="form-contacto" @submit="checkForm" action="" method="post" novalidate="true" v-if="visible">
			<p v-if="errors.length">
				<b>Por favor, corrige los siguientes:</b>
				<ul>
				<li v-for="error in errors" v-bind:key="error">{{ error }}</li>
				</ul>
			</p>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="nombre">Nombre</label>
						<input type="text" id="nombre" name="nombre" class="form-control" required v-model="datos.nombre">
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" class="form-control" required v-model="datos.email">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="form-group">
						<label for="comentario">Comentario</label>
						<textarea rows="5" id="comentario" name="comentario" class="form-control" required v-model="datos.comentario"></textarea>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6"></div>
				<div class="col-md-6 text-right">
					<button class="btn btn-primary" type="submit">Enviar</button>
				</div>
			</div>
		</form>
		<div id="enviando" v-if="enviando" class="text-center">
			<i class="fa fa-plus"></i> <h4>Enviando formulario</h4>
		</div>
		<div id="enviado" v-if="enviado" class="text-center">
			<h3>Gracias por contactar con nosotros</h3>
			<p>Responderemos tu consulta con la mayor brevedad posible</p>
		</div>
	</div>
</template>


<script lang="ts">
	import Vue, { VNode } from 'vue'

	export default Vue.extend({
		data: function () {
			return {
				errors: [],
				enviando: false,
				enviado: false,
				datos: {
					nombre: '',
					email: '',
					comentario: ''
				}
			}
		},
		methods: {
			checkForm: function(e: any) {
				this.errors = [];
				this.enviando = true;
				setTimeout(() => {
					this.enviando = false;
					this.enviado = true;
					console.log(JSON.parse(JSON.stringify(this.datos)));
				}, 1000);
				e.preventDefault();
			}
		},
		computed: {
			visible: function (): boolean {
				return !this.enviando && !this.enviado;
			}
		}
	});
</script>


<style scoped>
</style>

