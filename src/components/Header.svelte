<script>
	import '../app.css';
	import carpaLogo from '../lib/assets/img/CARPA-LOGO.png';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let navOpened = false;

	function toggleNav() {
		navOpened = !navOpened;
	}
</script>

<header class="py-8 lg:pt-6 lg:pb-14">
	<div
		class="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0"
	>
		<div class="flex justify-center lg:justify-normal">
			<a href="/">
				<img src={carpaLogo} alt="logo" />
			</a>
		</div>

		<div class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
			<div class="flex justify-center items-center gap-x-2 lg:justify-normal">
				<i class="fa-solid fa-envelope text-2xl text-mainRed"></i>
				<div>correo@correo</div>
			</div>
			<div class="flex justify-center items-center gap-x-2 lg:justify-normal">
				<i class="fa-solid fa-location-dot text-2xl text-mainRed"></i>
				<div>Bogotá, Colombia</div>
			</div>
			<div class="flex justify-center items-center gap-x-2 lg:justify-normal">
				<i class="fa-solid fa-phone text-2x1 text-mainRed"></i>
				<div>00000000</div>
			</div>

			<!-- Menu dispositivos moviles -->

			<nav
				class="{navOpened
					? 'mnav open'
					: 'mnav close'} mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20"
			>
				<button
					on:click={toggleNav}
					class="mnav__close-btn bg-black w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
				>
					{#if navOpened}
						<i class="mnav__close-btn-icon fa-solid fa-angle-left text-2xl text-white"></i>
					{:else}
						<i class="mnav__close-btn-icon fa-solid fa-angle-right text-2xl text-white"></i>
					{/if}
				</button>

				<div class="px-12 flex flex-col gap-y-12 h-full">
					<a href="/">
						<img src={carpaLogo} alt="logo" />
					</a>
					<ul class="flex flex-col gap-y-5">
						<li>
							<a href="/" class="text-black hover:text-mainRed transition-all duration-300"
								>Inicio</a
							>
						</li>
						<li>
							<a href="/servicios" class="text-black hover:text-mainRed transition-all duration-300"
								>Servicios</a
							>
						</li>
						<li>
							<a href="/productos" class="text-black hover:text-mainRed transition-all duration-300"
								>Productos</a
							>
						</li>
						<li>
							<a href="/contacto" class="text-black hover:text-mainRed transition-all duration-300"
								>Contacto</a
							>
						</li>
					</ul>
				</div>
			</nav>

			<!-- Menu pantalla equipo -->

			<nav
				class="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-center"
			>
				<ul class="flex gap-x-20">
					<li>
						<a href="/" class="text-black hover:text-mainRed transition-all duration-300">Inicio</a>
					</li>
					<li>
						<a href="/servicios" class="text-black hover:text-mainRed transition-all duration-300"
							>Servicios</a
						>
					</li>
					<li>
						<a href="/productos" class="text-black hover:text-mainRed transition-all duration-300"
							>Productos</a
						>
					</li>
					<li>
						<a href="/contacto" class="text-black hover:text-mainRed transition-all duration-300"
							>Contacto</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</header>

<!-- <header class="shadow-md font-sans">
	<section class="py-2 bg-mainRed text-white text-right px-10">
		<p class="text-sm"> 
			<strong class="mx-2">Dirección:</strong>Bogotá - Colombia<strong class="mx-2"
				>Telefono:</strong
			>000000000
		</p>
	</section>
	<div
		class="flex flex-wrap items-center justify-between gap-4 px-10 py-4 relative bg-white min-h-[70px]"
	>
		<a href="/"><img src={carpaLogo} alt="logo" class="w-36" /> </a>
		<div class="flex max-lg:ml-auto lg:order-1">
			<button id="toggle" class="lg:hidden">
				<svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					></path>
				</svg>
			</button>
		</div>
		<ul
            id="collapseMenu"
			class="lg:!flex lg:space-x-4 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
		>
			<li class="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
				<a href="/inicio" class="lg:hover:text-darkRed text-mainBlack block font-semibold text-[15px]"
					>Inicio</a
				>
			</li>
			<li class="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
				<a href="/servicios" class="lg:hover:text-darkRed text-mainBlack block font-semibold text-[15px]"
					>Servicios</a
				>
			</li>
			<li class="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
				<a href="/beneficios" class="lg:hover:text-darkRed text-mainBlack block font-semibold text-[15px]"
					>Beneficios</a
				>
			</li>
			<li class="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
				<a href="/productos" class="lg:hover:text-darkRed text-mainBlack block font-semibold text-[15px]"
					>Productos</a
				>
			</li>
		</ul>
	</div>
</header> -->

<style>
	.mnav.open {
		left: 0; /* Muestra el menú */
	}

	.mnav.close {
		left: -300px; /* Oculta el menú */
	}
</style>
