<div class="grid grid-cols-2 gap-4">
	<div class="p-4">
		<h1 class="text-2xl font-bold">Título del Carousel</h1>
		<p class="mt-4">Descripción del Carousel...</p>
	</div>
	<div class="carousel w-full">
		<div id="slide1" class="carousel-item relative w-full h-80">
			<img
				src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
				class="w-full h-full object-cover"
			/>
			<!-- Controles de navegación del carousel -->
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide2" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide2" class="carousel-item relative w-full h-80">
			<img
				src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
				class="w-full h-full object-cover"
			/>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide1" class="btn btn-circle">❮</a>
				<a href="#slide1" class="btn btn-circle">❯</a>
			</div>
		</div>
	</div>
</div>
