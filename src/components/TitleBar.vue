<template>
    <div class="title-bar">
        <router-link to="/exchange-rate" class="title-link">ExchangeRate</router-link>
    </div>
</template>

<script>
export default {
    name: 'TitleBar'
};
</script>

<style scoped>
.title-bar {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    height: 70px;
    width: 100%;
    box-sizing: border-box;
}

.title-link {
    color: #fff;
    text-decoration: none;
    font-size: 36px;
    font-weight: bold;
}
</style>