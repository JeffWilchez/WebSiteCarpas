<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Desc from '../components/Desc.svelte';

	import Imagen1 from '../lib/assets/img/galeria/carpa1.jpg';
	import Imagen2 from '../lib/assets/img/galeria/carpa2.jpg';
</script>

<svelte:head>
	<title>Carpas | Inicio</title>
</svelte:head>

<Header />
<Desc />

<h1 class="text-center mt-12 text-4xl lg:text-6xl font-bold">Beneficios</h1>
<section class="section">
	<div class="container mx-auto">
		<div class="flex flex-col xl:flex-row gap-y-6 justify-between">
			<div class="stats__item flex-1 xl:border-r flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-person-circle-check"></i>
				</div>
				<div class="font-semibold">Personal calificado</div>
			</div>
			<div class="stats__item flex-1 xl:border-r flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-people-arrows"></i>
				</div>
				<div class="font-semibold">Asesoramientos personalizados</div>
			</div>
			<div class="stats__item flex-1 xl:border-r flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-truck-fast"></i>
				</div>
				<div class="font-semibold">Entrega oportuna</div>
			</div>
			<div class="stats__item flex-1 flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-plane"></i>
				</div>
				<div class="font-semibold">Envios nacionales e internacionales</div>
			</div>
		</div>
	</div>
</section>

<Footer />
