<template>
    <div>

        <h1>
            Create a new word!
        </h1>
        <word-form @createOrUpdate ="createOrUpdate" ></word-form>
    </div>
</template>

<script>
    import WordForm from '../components/WordForm.vue';
    import {api} from '../helpers/helpers';
    
    export default{
        name: 'new-word',
        components:{
            'word-form': WordForm
        },
        methods:{
        createOrUpdate: async function(word){
            await api.createWord(word);
            this.flash(`Create sucessfully!` , 'success');
            this.$route.push(`/words/${word.id}`);
            }
        }
    }

</script>