<template>
  <div id="error_layout">
    <nuxt/>
  </div>
</template>

<style scoped>
/* Q. error.vueをブラウザの中心に表示するには? */
/* A. error.vueのlayoutであるerror_layout.vueのnuxtタグの親タグにflexを効かせる必要がある。よって、#error_layoutにflexを効かせ、positionをabsolute, 上下左右を0にすることによってブラウザの表示領域とerror_layoutの大きさを一致させることができる */
/* A. heightに100vhでもおｋ */
#error_layout {
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  height: 100vh;
  border: orange 2px dashed;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
