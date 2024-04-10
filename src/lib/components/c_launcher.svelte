<script>
	import { svg } from '$lib/consts/assets';

	let isPressed = false;
</script>

<div>
	<img src={svg} class={`w-12 h-12 rotate-90 ${isPressed ? '' : ''}`} alt="" />

	<button
		on:mousedown={() => (isPressed = true)}
		on:mouseup={() => (isPressed = false)}
		on:touchstart={() => (isPressed = true)}
		on:touchend={() => (isPressed = false)}>Press</button
	>
</div>
