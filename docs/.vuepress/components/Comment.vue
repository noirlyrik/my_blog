
<template>
    <div class="vcomment" v-if="data.comments === true">
        <div id="vcomments"> </div>
    </div>
</template>

<script>
export default {
    computed: {
    data() {
        return this.$page.frontmatter
        },
    },

    mounted: function() {
        this.renderValine()
        },
    
    watch: {
        $route(a, b) {
        if(a.path != b.path) {
            this.renderValine()
            }
        }
    },

    methods: {
        renderValine() {
            let $page = document.querySelector('.page')
            let vcomments = document.getElementById('vcomments')
            if (!vcomments) {
                vcomments = document.createElement('div')
                vcomments.id = 'vcomments'
            }

            if (this.$page.frontmatter.hideFooter) {
                vcomments.remove();
            } else {
                if ($page && !vcomments) {
                    $page.appendChild(vcomments)
                } else {
                    $page = document.querySelector('.page')
                    $page.appendChild(vcomments)
                }
                this.valine()
            }
        },

    valine() {
        const valine = require('valine');
        const leancloudStorage = require('leancloud-storage');

        if (typeof window !== 'undefined') {
            this.window = window
            window.AV = leancloudStorage
        }

        new Valine({
            el: '#valine-vuepress-comment',
            appId: 'LkHcwhqjnKRX27wQ9SndPQVH-gzGzoHsz',
            appKey: 'ojD5hwRlu6Tz4xGK7y3L8he8',
            placeholder: '',
            path: '',
            visitor: true,
            avator: '',
        });
    }
    }
}
</script>