<script>
    import Header from "./components/Header.svelte";
    import TypingArea from "./components/TypingArea.svelte";
</script>

<div>
    <Header />
    <div class="container">
        <div class="typing-area">
            <TypingArea />
        </div>
    </div>
</div>

<style>
    div.container {
        margin: 0 10vw;
        display: flex;
        justify-content: center;
        flex-direction: column; 
        padding: 1% 5%;
    }

    .typing-area {
        display: flex;
        justify-content: center;
    }
</style>
