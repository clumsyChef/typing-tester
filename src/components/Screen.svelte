<script context="module">
    import makeStr from "../words/getWords.js";    
    String.prototype.__proto__ = Array.prototype;
    export const mainString = makeStr().trim();
</script>

<div>
    { #each mainString as single, i }
        <span data-posi={i + 1} class="single-word {i === 0 ? 'highlighted' : ''}">{single}</span>
    { /each }
</div>

<style>
    span.single-word {
        font-size: 2rem;
        font-weight: 700;
        transition: all 0.05s ease;
    }
</style>
