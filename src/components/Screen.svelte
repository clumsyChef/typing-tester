<script context="module">
    import makeStr from "../words/getWords.js";    
    export const mainString = makeStr().trim();
</script>

<div>
    { #each mainString as word, i }
        <span data-posi={i} class="single-word {i === 0 ? 'highlighted' : ''}">{word}</span>
    { /each }
</div>

<style>
    span.single-word {
        font-size: 2rem;
        font-weight: 700;
        transition: all 0.05s ease;
    }
</style>
