<script>
	import '../app.css';
    import carpaLogo from '../lib/assets/img/CARPA-LOGO.png'
</script>

<header class="shadow-md font-sans">
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
</header>
