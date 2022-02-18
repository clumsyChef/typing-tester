<script>
    import { mainString } from "./Screen.svelte";
    import Screen from "./Screen.svelte";
    const stringToCompare = mainString;
    let someStr = "";

</script>

<div>
    <div class="what-to-type">
        <Screen />
    </div>
    <textarea rows="7" cols="60" on:input={e => someStr += e.target.value.slice(-1)}></textarea>
</div>

<style>
    textarea {
        font-size: 2rem;
        font-weight: 700;
        font-family: "Noto Sans Mono";
        padding: 25px;
    }

    .what-to-type {
        color: red;
        display: flex;
    }

</style>
