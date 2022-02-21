<script>
    import { mainString } from "./Screen.svelte";
    import Screen from "./Screen.svelte";
    const stringToCompare = mainString;
    let someStr = "";
    const typing = (e) => {
        let thisKey = e.data;
        let presentLength = e.target.value.length;
        
        console.log(e);
        console.log(e.target.value.length)
    }

</script>

<div>
    <div class="what-to-type">
        <Screen />
    </div>
    <textarea rows="7" cols="60" on:input={e => typing(e)}></textarea>
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
