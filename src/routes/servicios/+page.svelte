<script>
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import BtnWpp from '../../components/BtnWpp.svelte';
	import BtnContacto from '../../components/BtnContacto.svelte';

	import fabrica from '../../lib/assets/img/servicios/fabrica.png';
	import venta from '../../lib/assets/img/servicios/etiqueta-de-precio.png';
	import mantenimiento from '../../lib/assets/img/servicios/mantenimiento.png';
	import asesoria from '../../lib/assets/img/servicios/negocios-en-linea.png';
</script>

<svelte:head>
	<title>Empresa | Servicios</title>
</svelte:head>

<Header />

<section class="hero py-20 xl:pt-12 overflow-hidden">
	<div class="text-black">
		<div class="max-w-5xl mx-auto">
			<div class="max-w-2xl mx-auto pt-10 text-center">
				<h1 class="text-center mt-6 text-4xl lg:text-6xl font-bold">Nuestros servicios</h1>
				<p class="font-light mt-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est esse ipsa rerum laborum at
					pariatur possimus perspiciatis quas perferendis temporibus.
				</p>
			</div>
			<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-x-8 gap-y-10 max-md:justify-center mt-12">
				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img src={fabrica} class="w-full h-60 object-contain object-top bg-gray-300" alt="img" />
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Punto de fabrica</h4>
						<div class="mt-4">
							<p class="text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi praesentium velit
								asperiores iusto harum quam doloribus natus sunt laborum ipsam?
							</p>
						</div>
					</div>
				</div>

				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img src={venta} class="w-full h-60 object-contain object-top bg-gray-300" alt="img" />
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Venta</h4>
						<div class="mt-4">
							<p class="text-sm">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint optio fuga voluptate
								repellat nam, blanditiis vel doloremque maxime id tempora!
							</p>
						</div>
					</div>
				</div>

				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img
						src={mantenimiento}
						class="w-full h-60 object-contain object-top bg-gray-300"
						alt="img"
					/>
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Mantenimiento</h4>
						<div class="mt-4">
							<p class="text-sm">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tenetur eveniet
								laudantium ullam, at quibusdam esse sit maiores dolore accusantium id praesentium
								quae! Magnam amet doloribus laborum maiores impedit tenetur!
							</p>
						</div>
					</div>
				</div>

				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img src={asesoria} class="w-full h-60 object-contain object-top bg-gray-300" alt="img" />
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Asesoría personalizada</h4>
						<div class="mt-4">
							<p class="text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus impedit
								nisi deserunt corrupti odio quibusdam, suscipit tempore unde error nostrum similique
								rerum deleniti quasi consectetur, illo voluptatem exercitationem vero.
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
