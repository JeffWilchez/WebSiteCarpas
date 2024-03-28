<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Desc from '../components/Desc.svelte';
	import BtnWpp from '../components/BtnWpp.svelte';

	// import Imagen1 from '../lib/assets/img/galeria/carpa1.jpg';
	// import Imagen2 from '../lib/assets/img/galeria/carpa2.jpg';
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

<section class="services mb-[40px]">
	<div
		class="bg-gray-400 bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10"
	>
		<div class="container mx-auto">
			<div class="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
				<h2 class="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">Lorem Ipsum</h2>
				<p class="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in odio lorem. Cras dictum
					porta dui in venenatis. Aenean vulputate hendrerit porta. Donec nec magna vitae augue
					iaculis dictum.
				</p>
			</div>
		</div>
	</div>

	<div class="container mx-auto mt-8 xl:-mt-[144px]">
		<div class="grid xl:grid-cols-2 gap-5 px-8 xl:px-0">
			<div
				class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
			>
				<div class="mb-[15px]">
					<i class="fa-solid fa-thumbs-up text-4xl"></i>
				</div>
				<h3 class="h3 mb-[10px]">Servicio1</h3>
				<p class="font-light leading-normal max-w-[300px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in odio lorem.
				</p>
			</div>
			<div
				class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
			>
				<div class="mb-[15px]">
					<i class="fa-solid fa-thumbs-up text-4xl"></i>
				</div>
				<h3 class="h3 mb-[10px]">Mantenimiento1</h3>
				<p class="font-light leading-normal max-w-[300px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in odio lorem.
				</p>
			</div>
		</div>
	</div>
</section>

<BtnWpp />

<Footer />
