<script>
	import Imagen2 from '../lib/assets/img/galeria/carpa2.jpg';
	import { goto } from '$app/navigation';
</script>

<section class="hero bg-gray-300 py-12 xl:pt-12 overflow-hidden">
	<div class="container mx-auto h-full">
		<div class="flex flex-col xl:flex-row items-center justify-between h-full">
			<div class="hero__text xl:w-[48%] text-center xl:text-left">
				<h1 class="h1 mb-6">CARPART SAS</h1>
				<p class="mb-[42px] md:max-w-xl">
					Complacemos a nuestros clientes mediante altos estándares de calidad en la manufactura y
					fabricación de todo tipo de cubrimientos, en la prestación de nuestros servicios, mediante
					el talento humano y capacitación de nuestro personal, adicionalmente la implementación de
					tecnologías de punta, de esta forma brindamos al cliente un servicio de excelencia y un
					producto de sobresaliente por su duración e innovación.
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
