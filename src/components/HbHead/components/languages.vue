<template>
    <div class="languages" :id="id">
        <div class="value" @click="handleShowLanguages">{{ $t('common.language')[$i18n.locale] }} <span class="caret" :class="{ 'caret-up': show }" /></div>
        <transition name="fade">
            <div class="select" v-show="show">
                <div class="option" v-for="(item, key) in $t('common.language')" :key="key" @click="handleSwapLanguage(key)">{{ item }}</div>
            </div>
        </transition>
    </div>
</template>
<script type="text/babel">
    import { on, off, uniqueID } from '@/libs/utils'

    export default {
        name: 'Languages',
        watch: {
            show (value) {
                if (value) {
                    on(document.documentElement, 'click', this.handleDocumentClick)
                } else {
                    off(document.documentElement, 'click', this.handleDocumentClick)
                }
            }
        },
        data () {
            return {
                id: uniqueID('languages'),
                show: false
            }
        },
        methods: {
            handleShowLanguages () {
                this.show = true
            },
            handleDocumentClick (event) {
                if (event.target.closest(`#${this.id}`)) {
                    return
                }
                this.show = false
            },
            handleSwapLanguage (language) {
                this.$i18n.locale = language
                this.show = false
            }
        }
    }
</script>
<style lang="scss" type="text/scss">
    .languages {
        color: #fff;
        position: relative;

        .value {
            font-size: 18px;
            line-height: 18px;
            letter-spacing: 1px;
            font-weight: 400;

            &:hover {
                color: #007490;
            }
        }

        .select {
            width: 150px;
            position: absolute;
            right: 0;
            top: 30px;

            .option {
                text-align: right;
                font-size: 16px;
                line-height: 30px;
                cursor: pointer;

                &:hover {
                    color: #007490;
                }
            }
        }
        // transition fade
        .fade-enter {
            opacity: 0;

            &-active {
                transition: opacity .3s ease;
            }
        }
        .fade-leave-active {
            display: none;
        }
    }
</style>
