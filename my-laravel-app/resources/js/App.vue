<script setup lang="ts">
// import { provide } from "vue";
// import { AppStore } from "./app.store";
// import { DialogStore } from "../plugins/DialogPlugin/Dialog.service";
import Root from "./Components/Root/Root.vue";

/** グローバルストアを設定 */
// provide(AppStore.Key, new AppStore());
// provide(DialogStore.Key, new DialogStore());
</script>

<template>
    <!-- injectを伴うページ遷移時の処理のため、専用コンポーネントでラップ -->
    <Root>
        <router-view />
    </Root>
</template>
