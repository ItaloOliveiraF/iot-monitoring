<template>
    <div>
        <Card>
            <template #title>
                {{location}}
            </template>
            <template #content>
                <slot></slot>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        location: string,
    }>();
</script>

<style scoped>

</style>