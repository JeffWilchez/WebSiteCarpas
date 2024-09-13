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
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi id ratione alias ipsum
					nam laborum fugit beatae explicabo, et, odit incidunt magnam asperiores eaque iusto amet
					in doloribus sit voluptas eos modi fugiat enim expedita deleniti inventore. Quo, odio
					esse? Quod facere laudantium saepe magnam laboriosam sapiente architecto similique
					consequuntur ab dolores labore alias eos possimus nemo tempora nesciunt dicta, aliquam
					enim esse eaque corporis quo perferendis autem excepturi? Deserunt tenetur dolor tempore
					rerum fugiat, repellendus voluptatem magnam maxime doloribus corporis repellat,
					recusandae, numquam nam neque unde nihil impedit quo tempora ullam voluptatibus nemo.
					Adipisci debitis accusamus sapiente sequi eaque, fugit perspiciatis nobis expedita vitae
					illo quaerat temporibus natus, iure provident sit, enim doloribus ipsa tempora totam. Nemo
					provident quae praesentium quia. Quia nisi alias porro ab harum, iusto labore ut mollitia
					commodi dolorum praesentium cum, nulla, quo cumque ipsa itaque sapiente enim inventore
					dignissimos accusantium nemo! Dolor rerum labore deserunt laudantium, corrupti autem
					eligendi! Molestiae adipisci impedit eius, quasi asperiores quae saepe fuga. Assumenda
					quam eveniet aut soluta totam quos aperiam cum deserunt quas dignissimos? Autem cumque
					magni sequi odit corrupti quae voluptates soluta atque, officia minima temporibus quas
					consequuntur. Modi quos laboriosam, perspiciatis aliquam sequi provident labore expedita.
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
