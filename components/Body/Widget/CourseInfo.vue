<template>
    <div class="widget__course">
        <div class="course__name">
            <slot name="courseName"> </slot>
        </div>
        <div class="course__author">
            <slot name="courseAuthor"> </slot>
        </div>
    </div>
</template>
<style scoped>
.widget__course {
    margin-bottom: 10px;
    padding: 5px 20px;
}

.widget__course:hover {
    background-color: whitesmoke;
}

.course__name {
    font-weight: bolder;
    font-size: 14px;
}

.course__author {
    font-size: 12px;
    font-weight: 400;
    color: gray;
}
</style>
