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
	<title>Carpart | Servicios</title>
</svelte:head>

<Header />

<section class="hero py-20 xl:pt-12 overflow-hidden">
	<div class="text-black">
		<div class="max-w-5xl mx-auto">
			<div class="max-w-2xl mx-auto pt-10 text-center">
				<h1 class="text-center mt-6 text-4xl lg:text-6xl font-bold">Nuestros servicios</h1>
				<p class="font-light mt-4">
					Construyendo espacios unicos, donde cada evento se convierte en una experiencia
					inolvidable: ¡Nuestras carpas, tu esenario de innovación empresarial!
				</p>
			</div>
			<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-x-8 gap-y-10 max-md:justify-center mt-12">
				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img
						src={fabrica}
						class="w-full h-60 object-contain object-top bg-gray-300"
						alt="img"
					/>
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Punto de fabrica</h4>
						<div class="mt-4">
							<p class="text-sm">
								Nuestra compañía es punto de fábrica, visítanos para que conozca la materia prima, y
								todo tipo de cubrimientos.
							</p>
						</div>
					</div>
				</div>

				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img
						src={venta}
						class="w-full h-60 object-contain object-top bg-gray-300"
						alt="img"
					/>
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Venta</h4>
						<div class="mt-4">
							<p class="text-sm">
								Fabricación de todo tipo de cubrimientos en todos los diseños y medidas, con lonas
								nacionales e internacionales, con calibres de alta calidad.
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
								Le damos tranquilidad y confianza a nuestros clientes con nuestro servicio de
								mantenimiento.
							</p>
						</div>
					</div>
				</div>

				<div class="border rounded-md overflow-hidden max-md:max-w-[300px]">
					<img
						src={asesoria}
						class="w-full h-60 object-contain object-top bg-gray-300"
						alt="img"
					/>
					<div class="p-4">
						<h4 class="text-xl font-extrabold">Asesoría personalizada</h4>
						<div class="mt-4">
							<p class="text-sm">
								La visita y asesoría personalizada que le brindamos a nuestros clientes, le dará
								seguridad al momento de hacer su inversión, ya que, con este acompañamiento como
								compañía nos cercioramos que el producto le sea útil y funcional.
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
