<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Desc from '../components/Desc.svelte';
	import BtnWpp from '../components/BtnWpp.svelte';
	import BtnContacto from '../components/BtnContacto.svelte';
</script>

<svelte:head>
	<title>Empresa | Inicio</title>
</svelte:head>

<Header />
<Desc />

<h1 class="text-center mt-6 text-4xl lg:text-6xl font-bold">Beneficios</h1>
<section class="section">
	<div class="container mx-auto">
		<div class="flex flex-col xl:flex-row gap-y-6 justify-between">
			<div class="stats__item flex-1 xl:border-r flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-person-circle-check"></i>
				</div>
				<div class="font-semibold">Personal calificado</div>
			</div>
			<div class="stats__item flex-1 xl:border-r flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-people-arrows"></i>
				</div>
				<div class="font-semibold">Asesoramientos personalizados</div>
			</div>
			<div class="stats__item flex-1 xl:border-r flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-truck-fast"></i>
				</div>
				<div class="font-semibold">Entrega oportuna</div>
			</div>
			<div class="stats__item flex-1 flex flex-col items-center">
				<div class="text-5xl xl:text-[80px] font-semibold text-red-700 xl:mb-2">
					<i class="fa-solid fa-plane"></i>
				</div>
				<div class="font-semibold">Envios nacionales e internacionales</div>
			</div>
		</div>
	</div>
</section>

<div class="mb-8">
	<div class="mb-20 text-center max-w-3xl mx-auto">
		<h1 class="text-center text-4xl lg:text-6xl font-bold">Mision y Vision</h1>
	</div>
	<div class="grid md:grid-cols-2 md:gap-6 max-md:gap-10 max-w-6xl mx-auto">
		<div
			class="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative"
		>
			<i
				class="fa-solid fa-gears w-14 h-14 rounded-full absolute right-0 left-0 mx-auto text-6xl -top-7 text-red-700"
			></i>
			<div class="mt-8 text-center">
				<p class="font-light leading-normal max-w-[300px]">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto corrupti, quos
					accusamus officiis aut molestias maiores modi veritatis reprehenderit minus ratione. At
					officia magni voluptates incidunt nulla consequuntur cum culpa vel voluptatum? Ut ex quo
					molestias illo corrupti enim, exercitationem labore, consequuntur eos perspiciatis
					voluptas reprehenderit totam, vitae voluptate.
				</p>
				<h4 class="h3 mb-[10px] mt-2">Mision</h4>
			</div>
		</div>
		<div
			class="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative"
		>
			<i
				class="fa-solid fa-eye w-14 h-14 rounded-full absolute right-0 left-0 mx-auto text-6xl -top-7 text-red-700"
			></i>
			<div class="mt-8 text-center">
				<p class="font-light leading-normal max-w-[300px]">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem recusandae, suscipit
					corrupti quas molestias officiis magni aspernatur exercitationem. Non amet, ad iste nulla,
					eos minus illo, error dignissimos mollitia quisquam ab perspiciatis! Vero neque quo
					recusandae eveniet laboriosam ad repudiandae iusto tempora alias ab? Assumenda quo
					blanditiis dolores quas et?
				</p>
				<h4 class="h3 mb-[10px] mt-2">Vision</h4>
			</div>
		</div>
	</div>
</div>

<section class="services mb-[40px]">
	<div
		class="bg-gray-400 bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10"
	>
		<div class="container mx-auto">
			<div class="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
				<h2 class="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
					Politica de calidad
				</h2>
				<p class="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur blanditiis
					accusamus temporibus quam eveniet mollitia? Inventore dolores accusantium a!
				</p>
			</div>
		</div>
	</div>

	<div class="container mx-auto mt-8 xl:-mt-[144px]">
		<div class="grid xl:grid-cols-2 gap-5 px-8 xl:px-0">
			<div
				class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
			>
				<div class="mb-[15px]">
					<i class="fa-solid fa-shield-halved text-4xl"></i>
				</div>
				<h3 class="h3 mb-[10px]">Instalaciones seguras</h3>
				<p class="font-light leading-normal max-w-[300px]">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique aperiam quia
					recusandae repellendus ratione explicabo atque, eaque voluptatum, quod, optio doloremque
					error autem id. Cupiditate excepturi ipsum dicta odit!
				</p>
			</div>
			<div
				class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
			>
				<div class="mb-[15px]">
					<i class="fa-solid fa-certificate text-4xl"></i>
				</div>
				<h3 class="h3 mb-[10px]">Personal certificado</h3>
				<p class="font-light leading-normal max-w-[300px]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, natus harum nihil in
					fugit asperiores ab consectetur veritatis expedita. Eaque maxime et expedita vero rerum at
					id omnis voluptate ut!
				</p>
			</div>
		</div>
	</div>
</section>

<BtnWpp />

<BtnContacto />

<Footer />
