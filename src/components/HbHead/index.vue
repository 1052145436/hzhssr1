<template>
    <div class="common-head">
        <div class="common-inner">
            <router-link :to="{ name: 'home' }" class="logo"><img src="~@/assets/img/common/logo.png"/></router-link>
            <div class="nav">
                <router-link v-for="(item, key) in $t('common.menu')"
                             :key="key"
                             :to="{ name: key }" v-if="item != 'JoinUs'">{{ item }}</router-link>
            </div>
            <Languages />
        </div>
    </div>
</template>

<script type="text/babel">
    import Languages from './components/languages'

    export default {
        name: 'HbHead',
        components: { Languages },
        props: [ 'navIndex' ],
        methods:{

        },
        mounted(){

        }
    }
</script>

<style lang="scss" type="text/scss">
    .common-head {
        width: 100%;
        min-width: 1200px;
        height: 50px;
        //background:#000;
        padding: 80px 0px 120px 0px;
        .common-inner {
            position: relative;
            width: 1200px;
            height: 70px;
            line-height: 70px;
            margin: 0px auto;
            text-align: right;
            .logo {
                display: inline-block;
                width: 197px;
                height: auto;
                float: left;
            }

            .nav {
                text-align: right;
                /*padding-right: 120px;*/
                margin: 0px;
                a {
                    color: #fff;
                    font-size: 18px;
                    line-height: 18px;
                    padding: 0px 20px;
                    letter-spacing: 1px;
                    font-weight: 400;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    text-decoration: none;

                    &:hover{
                        color: #007490;
                    }
                    &.router-link-active{
                        color: #0074c2;
                    }
                }

                .current {
                    color: #0074c2;
                }
                .router-link-active{
                    color: #0074c2;
                }
            }

            .languages {
                position: absolute;
                width: 120px;
                height: 20px;
                right: -100px;
                top: 25px;
                cursor: pointer;
            }
        }
    }

    .clearfix:after {
        content: "020";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clearfix {
        /* 触发 hasLayout */
        zoom: 1;
    }

    .intro-s6 {
        width: 100%;
        background-color: #4c4c4c;

        .intro-s6-inner {
            width: 1200px;
            margin: 0px auto;
            padding-top: 26px;
            clear: both;

            .align-left {
                width: 800px;
                float: left;
                li {
                    float: left;
                    width: 162px;
                    padding: 24px 0px;
                    a {
                        width: 138px;
                        margin: 0px auto;
                        display: block;
                        color: #fff;
                        font-size: 16px;
                        line-height: 38px;
                        font-weight: 100;

                        em {
                            font-size: 25px;
                            font-weight: 400;
                        }

                        &:hover {
                            color: #0074c2;
                        }
                    }
                }
            }

            .align-right {
                width: 400px;
                float: right;
                li {
                    float: right;
                    width: 162px;

                    img {
                        display: block;
                        width: 138px;
                        height: auto;
                        margin: 0px auto;
                    }

                    p {
                        width: 138px;
                        margin: 0px auto;
                        color: #fff;
                        font-size: 19px;
                        line-height: 38px;
                        text-align: center;
                        font-weight: 100;
                    }
                }
            }

            .version {
                clear: both;
                width: 98%;
                margin: 0px auto;
                font-size: 20px;
                line-height: 20px;
                text-align: center;
                font-family: sans-serif;
                font-weight: 200;
                color: #fff;
                padding: 20px 0px 53px 0px;
                border-top: 1px solid #fff;
            }
        }
    }

</style>
