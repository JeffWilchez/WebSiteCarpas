<script>
	export let id_modal;
</script>

<dialog id={id_modal} class="modal">
	<div class="modal-box max-w-6xl">
		<form method="dialog">
			<button class="btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<slot name="title" />
		<form class="grid gap-1">
			<slot />
		</form>
	</div>
</dialog>
