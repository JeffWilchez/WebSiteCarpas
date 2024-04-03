<script>
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import BtnWpp from '../../components/BtnWpp.svelte';
	import BtnContacto from '../../components/BtnContacto.svelte';
</script>

<svelte:head>
	<title>Carpas | Servicios</title>
</svelte:head>

<Header />

<!-- <section class="services bg-slate-500 bg-cover bg-right py-12 xl:min-h-[595px]">
	<div class="services__container container mx-auto">
		servicios
	</div>
</section> -->

<section class="hero bg-red-200 py-12 xl:pt-12 overflow-hidden">
	<div class="container mx-auto h-full">
		<div class="flex flex-col xl:flex-row items-center justify-between h-full">
			<div class="hero__text xl:w-[48%] text-center xl:text-left">
				<p class="mb-[42px] md:max-w-xl">
					Suspendisse varius tempus augue, ac cursus felis. Pellentesque efficitur aliquet lacinia.
					Nullam vitae tellus sit amet nisi scelerisque vestibulum sed vitae nisi.
				</p>
			</div>
		</div>
	</div>
</section>

<BtnWpp />

<BtnContacto />

<Footer />
