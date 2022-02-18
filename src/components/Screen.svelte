<script context="module">
    import makeStr from "../words/getWords.js";    
    export const mainString = makeStr();
</script>

<div>
    <p class="string">
        { mainString.trim() }
    </p>
</div>

<style>
    p.string {
        font-size: 2rem;
        font-weight: 700;
    }
</style>
