<script>
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import BtnWpp from '../../components/BtnWpp.svelte';
	import BtnContacto from '../../components/BtnContacto.svelte';

	import iconCarpa from '../../lib/assets/img/icons/Icono carpa Bitech.webp';
	import iconDisEspeciales from '../../lib/assets/img/icons/Icono Diseños especialesBitech.webp';
	import iconFoCort from '../../lib/assets/img/icons/Icono Forros y cortinas Bitech.webp';
	import iconHangares from '../../lib/assets/img/icons/Icono Hangares y campamentos Bitech (1).webp';
	import iconParasolF from '../../lib/assets/img/icons/Icono parasoles fachada Bitech (1).webp';
	import iconParasolS from '../../lib/assets/img/icons/Icono Parasoles sombrilla Bitech.webp';
	import iconTarima from '../../lib/assets/img/icons/Icono Tarimas y conchas Bitech.webp';
</script>

<svelte:head>
	<title>Carpas | Productos</title>
</svelte:head>

<Header />

<div class="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full py-20">
	<h2 class="text-4xl font-extrabold text-gray-800 mb-12 text-center">Conoce nuestros productos</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		<div
			class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
		>
			<div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
				<img src={iconCarpa} alt="Product 1" class="h-full w-full object-contain" />
			</div>
			<div class="text-center mt-4">
				<h3 class="text-lg font-bold text-gray-800">Carpa</h3>
				<button
					type="button"
					class="w-full mt-6 px-4 py-3 bg-mainRed hover:bg-[#222] text-white rounded-full"
					>Más información..</button
				>
			</div>
		</div>

		<div
			class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
		>
			<div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
				<img src={iconDisEspeciales} alt="Product 1" class="h-full w-full object-contain" />
			</div>
			<div class="text-center mt-4">
				<h3 class="text-lg font-bold text-gray-800">Diseños especiales</h3>
				<button
					type="button"
					class="w-full mt-6 px-4 py-3 bg-mainRed hover:bg-[#222] text-white rounded-full"
					>Más información..</button
				>
			</div>
		</div>

		<div
			class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
		>
			<div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
				<img src={iconFoCort} alt="Product 1" class="h-full w-full object-contain" />
			</div>
			<div class="text-center mt-4">
				<h3 class="text-lg font-bold text-gray-800">Forros y cortinas</h3>
				<button
					type="button"
					class="w-full mt-6 px-4 py-3 bg-mainRed hover:bg-[#222] text-white rounded-full"
					>Más información..</button
				>
			</div>
		</div>

		<div
			class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
		>
			<div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
				<img src={iconHangares} alt="Product 1" class="h-full w-full object-contain" />
			</div>
			<div class="text-center mt-4">
				<h3 class="text-lg font-bold text-gray-800">Hangares y campamentos</h3>
				<button
					type="button"
					class="w-full mt-6 px-4 py-3 bg-mainRed hover:bg-[#222] text-white rounded-full"
					>Más información..</button
				>
			</div>
		</div>
		<div
			class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
		>
			<div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
				<img src={iconParasolF} alt="Product 1" class="h-full w-full object-contain" />
			</div>
			<div class="text-center mt-4">
				<h3 class="text-lg font-bold text-gray-800">Parasol fachada</h3>
				<button
					type="button"
					class="w-full mt-6 px-4 py-3 bg-mainRed hover:bg-[#222] text-white rounded-full"
					>Más información..</button
				>
			</div>
		</div>
		<div
			class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
		>
			<div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
				<img src={iconParasolS} alt="Product 1" class="h-full w-full object-contain" />
			</div>
			<div class="text-center mt-4">
				<h3 class="text-lg font-bold text-gray-800">Parasol sombrilla</h3>
				<button
					type="button"
					class="w-full mt-6 px-4 py-3 bg-mainRed hover:bg-[#222] text-white rounded-full"
					>Más información..</button
				>
			</div>
		</div>
		<div
			class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative"
		>
			<div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
				<img src={iconTarima} alt="Product 1" class="h-full w-full object-contain" />
			</div>
			<div class="text-center mt-4">
				<h3 class="text-lg font-bold text-gray-800">Tarimas y conchas</h3>
				<button
					type="button"
					class="w-full mt-6 px-4 py-3 bg-mainRed hover:bg-[#222] text-white rounded-full"
					>Más información..</button
				>
			</div>
		</div>
	</div>

	<BtnContacto />

	<BtnWpp />
</div>

<Footer />
