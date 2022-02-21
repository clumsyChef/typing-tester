<script>
    import { mainString } from "./Screen.svelte";
    import Screen from "./Screen.svelte";
    const stringToCompare = mainString;
    let someStr = "";
    let timer;
    const typing = (e) => {
        if(!timer) {
            timer = new Date().getTime();
        }
        let thisKey = e.data;
        let presentLength = e.target.value.length;
        let presentLetter = stringToCompare[presentLength - 1];
        if(presentLetter === thisKey) {
            document.querySelectorAll("span[data-posi]").forEach((elem) => {elem.classList.remove("highlighted")});
            let nextSpan = document.querySelector(`span[data-posi='${presentLength}']`);
            if(nextSpan) {
                document.querySelector(`span[data-posi='${presentLength}']`).classList.add("highlighted");
            } else {
                let finalTime = new Date().getTime();
                let millis = (finalTime - timer) / 1000;
            }
        } else {
            e.target.value = e.target.value.slice(0, -1);
        }
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
