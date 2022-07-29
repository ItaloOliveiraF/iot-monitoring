<template>
    <div>
        <Card>
            <template #title>
                {{variable}}
            </template>
            <template #content>
                <img :src="iconPath" :alt="variable">
                

            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        variable?: string,
        value?: string,
        unit?: string,
        iconPath?: string
    }>();
</script>

<style scoped>

</style>