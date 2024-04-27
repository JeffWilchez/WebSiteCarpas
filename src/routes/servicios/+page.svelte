<script>
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import BtnWpp from '../../components/BtnWpp.svelte';
	import BtnContacto from '../../components/BtnContacto.svelte';

	import iconFoCort from '../../lib/assets/img/descripcion/image1.png';
</script>

<svelte:head>
	<title>Carpart | Servicios</title>
</svelte:head>

<Header />

<section class="hero py-20 xl:pt-12 overflow-hidden">
	<div class="text-black">
		<div class="max-w-5xl mx-auto">
			<div class="max-w-2xl mx-auto pt-10 text-center">
				<h1 class="text-center mt-6 text-4xl lg:text-6xl font-bold">Nuestros servicios</h1>
				<p class="font-light mt-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta faucibus scelerisque.
					Nulla tincidunt interdum magna, ac finibus ex mollis ac. Ut non tortor sapien. Praesent
					rhoncus varius erat sit amet tincidunt. Nam convallis diam at elit blandit elementum.
					Phasellus feugiat imperdiet tincidunt. Pellentesque in euismod libero.
				</p>
			</div>
			<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-10 max-md:justify-center mt-12">
				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img src={iconFoCort} class="w-full h-60 object-contain object-top bg-gray-300" alt="img" />
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Venta</h4>
						<div class="mt-4">
							<p class="text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta faucibus
								scelerisque. Nulla tincidunt interdum magna, ac finibus ex mollis ac. Ut non tortor
								sapien. Praesent rhoncus varius erat sit amet tincidunt. Nam convallis diam at elit
								blandit elementum. Phasellus feugiat imperdiet tincidunt. Pellentesque in euismod
								libero.
							</p>
						</div>
					</div>
				</div>

				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img src={iconFoCort} class="w-full h-60 object-contain object-top bg-gray-300" alt="img" />
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Mantenimiento</h4>
						<div class="mt-4">
							<p class="text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta faucibus
								scelerisque. Nulla tincidunt interdum magna, ac finibus ex mollis ac. Ut non tortor
								sapien. Praesent rhoncus varius erat sit amet tincidunt. Nam convallis diam at elit
								blandit elementum. Phasellus feugiat imperdiet tincidunt. Pellentesque in euismod
								libero.
							</p>
						</div>
					</div>
				</div>

				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img src={iconFoCort} class="w-full h-60 object-contain object-top bg-gray-300" alt="img" />
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Asesoramientos</h4>
						<div class="mt-4">
							<p class="text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta faucibus
								scelerisque. Nulla tincidunt interdum magna, ac finibus ex mollis ac. Ut non tortor
								sapien. Praesent rhoncus varius erat sit amet tincidunt. Nam convallis diam at elit
								blandit elementum. Phasellus feugiat imperdiet tincidunt. Pellentesque in euismod
								libero.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<BtnWpp />

<BtnContacto />

<Footer />
