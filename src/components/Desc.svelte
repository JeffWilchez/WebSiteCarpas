<script>
	import Imagen2 from '../lib/assets/img/galeria/carpa2.jpg';
	import { goto } from '$app/navigation';
</script>

<section class="hero bg-gray-300 py-12 xl:pt-12 overflow-hidden">
	<div class="container mx-auto h-full">
		<div class="flex flex-col xl:flex-row items-center justify-between h-full">
			<div class="hero__text xl:w-[48%] text-center xl:text-left">
				<h1 class="h1 mb-6">Lorem Ipsum</h1>
				<p class="mb-[42px] md:max-w-xl">
					Suspendisse varius tempus augue, ac cursus felis. Pellentesque efficitur aliquet lacinia.
					Nullam vitae tellus sit amet nisi scelerisque vestibulum sed vitae nisi. Quisque vel
					maximus quam. Suspendisse varius tempus augue, ac cursus felis. Pellentesque efficitur
					aliquet lacinia. Nullam vitae tellus sit amet nisi scelerisque vestibulum sed vitae nisi.
					Quisque vel maximus quam. Suspendisse varius tempus augue, ac cursus felis. Pellentesque
					efficitur aliquet lacinia. Nullam vitae tellus sit amet nisi scelerisque vestibulum sed
					vitae nisi. Quisque vel maximus quam.
				</p>
				<button
					on:click={() => goto('/productos')}
					class="btn btn-lg btn-accent mx-auto xl:mx-0 border-none"
					>Conoce nuestros productos</button
				>
			</div>

			<div class="hero__img hidden xl:flex max-w-[814px] self-end pl-5">
				<img class="rounded-full" src={Imagen2} alt="imagenDescripción" />
			</div>
		</div>
	</div>
</section>
