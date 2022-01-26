<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name:'entry', params:{id:10}})"
    >
        <div
            class="entriy-title d-flex"
        >
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2022, jueves</span>
        </div>

        <div class="entry-descripcion">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur maxime recusandae eius necessitatibus voluptates? Labore excepturi sunt, optio, laboriosam eos in ipsa enim repellendus quam voluptate cupiditate! Quibusdam, maiores.
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e20;
        transition: 0.2s all ease-in;
    
        &:hover {
            background-color: lighten($color: grey, $amount:45);
            transition: 0.2s all ease-in;
        }
        .entry-descripcion{
            font-size: 12px;
        }
    }
</style>