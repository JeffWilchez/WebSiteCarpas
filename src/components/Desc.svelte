<script>
	import imageDesc from '../lib/assets/img/descripcion/image1.png';
</script>

<section class="hero bg-red-300 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
	<div class="container mx-auto h-full">
		<div class="flex flex-col xl:flex-row items-center justify-between h-full">
			<div class="hero__text xl:w-[48%] text-center xl:text-left">
				<h1 class="h1 mb-6">Lorem Ipsum</h1>
				<p class="mb-[42px] md:max-w-xl">
					Suspendisse varius tempus augue, ac cursus felis. Pellentesque efficitur aliquet lacinia.
					Nullam vitae tellus sit amet nisi scelerisque vestibulum sed vitae nisi. Quisque vel
					maximus quam.
				</p>
				<button class="btn btn-lg btn-accent mx-auto xl:mx-0">Contacto</button>
			</div>

			<div class="hero__img hidden xl:flex max-w-[814px] self-end">
				<img src={imageDesc} alt="imagenDescripción" />
			</div>
		</div>
	</div>
</section>
