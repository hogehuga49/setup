<script setup lang="ts">
/** サービス */
import { ref, watch, onUpdated } from "vue";
import { useRouter } from "vue-router";
// import { AppService } from "./app.service";
// import { MaterializeCssWrapper } from "../plugins/MaterializeCss/MaterializeCssWrapper.service";
/** コンポーネント */
// import Dialog from "../plugins/DialogPlugin/Dialog.component.vue";
// import Footer from "../Components/Parts/Footer/Footer.parts.vue";

/**
 * アプリ全体の初期処理（子コンポーネントのレンダリング前）
 */
// const mountFlg = ref<boolean>(false);
const mountFlg = ref<boolean>(true);
const router = useRouter();
// const appService = new AppService();
// let updateFlg = true; // DOMが変わる度に数回呼ばれるので制御

watch(router.currentRoute, async (newValue, oldValue) => {
    // console.log("Root pre init start >>>>>> ");
    // mountFlg.value = false; // この中の処理が完了するまで子コンポーネントの生成をストップ
    // // この中でinjectは使えない
    // // const appService = new AppService();
    // console.log(newValue);
    // console.log("ログインチェック");
    // const result = await appService.navigationGuard(newValue, oldValue);
    // console.log(result);
    // // NOTE: ログイン画面への再遷移時、遷移完了までの間に子コンポーネントの処理が走るので、
    // //       再遷移する場合はレンダリング自体しない
    // if (result) {
    //     // 遷移してOKの場合のみ子コンポーネントをレンダリング開始
    //     mountFlg.value = true;
    //     updateFlg = true;
    // }
    // console.log("Root pre init finish >>>>>> ");
});

/** 全画面の表示時に実施したい処理(主にCSS関連) */
// onUpdated(() => {
//     if (updateFlg) {
//         console.log("css 初期化");
//         MaterializeCssWrapper.init();
//         updateFlg = false;
//     }
// });
</script>

<template>
    <router-view v-if="mountFlg" />

    <!-- <Dialog></Dialog>
    <Footer></Footer> -->
</template>
