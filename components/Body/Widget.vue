<template>
    <div class="app__widget" :style="{ flex: flexPoint }">
        <BodyWidgetSuggestion>
            <template v-slot:header> Add to your feed </template>
            <template v-slot:body>
                <BodyWidgetUserInfo />
                <BodyWidgetUserInfo />
            </template>
            <template v-slot:footer> View all recommandations </template>
        </BodyWidgetSuggestion>
        <BodyWidgetSuggestion>
            <template v-slot:header> Today’s top courses </template>
            <template v-slot:body>
                <BodyWidgetCourseInfo>
                    <template v-slot:courseName> 1. Customer Experience Leadership </template>
                    <template v-slot:courseAuthor> Bard Cleveland </template>
                </BodyWidgetCourseInfo>
                <BodyWidgetCourseInfo>
                    <template v-slot:courseName> 2. How to Be an Inclusive Leader </template>
                    <template v-slot:courseAuthor> getAbstract </template>
                </BodyWidgetCourseInfo>
                <BodyWidgetCourseInfo>
                    <template v-slot:courseName> 3. Unconscious Bias </template>
                    <template v-slot:courseAuthor> Stacey Gordon </template>
                </BodyWidgetCourseInfo>
            </template>
            <template v-slot:footer> Show more on LinkedIn Learning </template>
        </BodyWidgetSuggestion>
    </div>
</template>
<script>
export default {
    props: ["flexPoint"],
};
</script>
<style scoped></style>
