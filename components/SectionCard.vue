<template>
    <div>
        <Card >
            <template #title>
                {{location}}
            </template>
            <template #content>
                <div class="section-card-content">
                    <slot></slot>
                </div>
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
    .section-card-content{
        display: flex;
        gap: 2rem;
    }
</style>