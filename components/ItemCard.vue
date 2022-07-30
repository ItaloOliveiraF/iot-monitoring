<template>
    <Card >
        <template #title>
            {{variable}}
        </template>
        <template #content>
            <div class="flex-content">
                <img :src="iconPath" :alt="variable" class="icon">
                <div>
                    <span class="item-value">{{value}}</span>
                    <span>{{unit}}</span>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
    defineProps<{
        variable?: string,
        value?: number,
        unit?: string,
        iconPath?: string
    }>();
</script>

<style scoped>
    .icon {
        width: 2rem;
    }

    .flex-content {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
   
    .item-value {
        font-size: 2rem;
        font-weight: bold;
    }

</style>