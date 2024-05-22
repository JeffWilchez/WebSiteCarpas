<script>
	import image1 from '$lib/assets/img/galeria/parasoles/IMG-20240509-WA0046.webp';
	import image2 from '$lib/assets/img/galeria/parasoles/IMG-20240509-WA0050.webp';
	import image3 from '$lib/assets/img/galeria/parasoles/IMG-20240509-WA0051.webp';
	import image4 from '$lib/assets/img/galeria/parasoles/IMG-20240509-WA0052.webp';
	import image5 from '$lib/assets/img/galeria/parasoles/IMG-20240509-WA0057.webp';
	import image6 from '$lib/assets/img/galeria/parasoles/IMG-20240509-WA0058.webp';

	let currentSlide = 1;
	const totalSlides = 6;

	const slides = [
		{
			title: 'Sombrilla',
			description: 'Puedes ser cuadrados o redondeos, metálicos o en madera, según la medida que se requiera.',
			image: image1
		},
		{
			title: 'Sombrilla',
			description: 'Puedes ser cuadrados o redondeos, metálicos o en madera, según la medida que se requiera.',
			image: image2
		},
		{
			title: 'Sombrilla',
			description: 'Puedes ser cuadrados o redondeos, metálicos o en madera, según la medida que se requiera.',
			image: image3
		},
		{
			title: 'Sombrilla',
			description: 'Puedes ser cuadrados o redondeos, metálicos o en madera, según la medida que se requiera.',
			image: image4
		},
		{
			title: 'Sombrilla',
			description: 'Puedes ser cuadrados o redondeos, metálicos o en madera, según la medida que se requiera.',
			image: image5
		},
		{
			title: 'Sombrilla',
			description: 'Puedes ser cuadrados o redondeos, metálicos o en madera, según la medida que se requiera.',
			image: image6
		}
	];

	function prevSlide() {
		currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
	}

	function nextSlide() {
		currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
	}
</script>

<div class="grid grid-cols-2 gap-4">
	<div class="p-4">
		<h1 class="text-2xl font-bold">{slides[currentSlide - 1].title}</h1>
		<p class="mt-4">{slides[currentSlide - 1].description}</p>
	</div>
	<div class="carousel w-full relative">
		{#each slides as slide, i}
			<div class="carousel-item relative w-full h-80 {currentSlide === i + 1 ? 'block' : 'hidden'}">
				<img alt={`image${i + 1}`} src={slide.image} class="w-full h-full object-cover" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href={`#slide${i === 0 ? totalSlides : i}`} class="btn btn-circle" on:click={prevSlide}
						>❮</a
					>
					<a
						href={`#slide${i === totalSlides - 1 ? 1 : i + 2}`}
						class="btn btn-circle"
						on:click={nextSlide}>❯</a
					>
				</div>
			</div>
		{/each}
	</div>
</div>
