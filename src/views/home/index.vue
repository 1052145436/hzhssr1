<template>
    <div>
        <div style="width:100%;min-width:1200px;background:#000;">
            <hb-head></hb-head>
        </div>
        <div class="main-wapper">
            <div class="main-content">
                <div class="session1">
                    <img src="~@/assets/img/index/world.jpg" class="bg">
                    <div class="title">{{ $t('about.topic') }}</div>
                </div>
            </div>
            <div class="session2">
                <ul>
                    <li>
                        <div class="img-box">
                            <img src="~@/assets/img/index/icon_time.png" class="icon_time lazyload">
                        </div>
                        <div class="txt-box"><strong>2018</strong><span>{{ $t('about.year') }}</span></div>
                        <p>{{ $t('about.established') }}</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="~@/assets/img/index/icon_money.png" class="icon_money lazyload">
                        </div>
                        <div class="txt-box"><strong>100</strong><span>{{ $t('about.billion') }}</span></div>
                        <p>{{ $t('about.annualTurnover') }}</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="~@/assets/img/index/icon_area.png" class="icon_area lazyload">
                        </div>
                        <div class="txt-box"><strong>10</strong><em>+</em></div>
                        <p>{{ $t('about.businessCoverageArea') }}</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="~@/assets/img/index/icon_type.png" class="icon_type lazyload">
                        </div>
                        <div class="txt-box"><strong>30</strong><em>+</em></div>
                        <p>{{ $t('about.commodityCategory') }}</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="~@/assets/img/index/icon_goods.png" class="icon_goods lazyload">
                        </div>
                        <div class="txt-box"><strong>20</strong><em>+</em></div>
                        <p>{{ $t('about.numberOfMallItems') }}</p>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="session3">
                <img src="~@/assets/img/index/company.jpg" class="bg lazyload">
                <div class="session3-inner">
                    <h1>{{ $t('about.global') }}</h1>
                    <div class="white-bar"></div>
                    <div class="content-p">
                        {{ $t('about.globalDesc') }}
                    </div>
                    <h1>{{ $t('about.partner') }}</h1>
                    <div class="white-bar"></div>
                    <ul class="item-list">
                        <li>
                            <div class="img-box">
                                <img src="~@/assets/img/index/icon_facebook.png" class="lazyload">
                            </div>
                            <p>Facebook</p>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="~@/assets/img/index/icon_ins.png" class="lazyload">
                            </div>
                            <p>Instgram</p>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="~@/assets/img/index/icon_youtube.png" class="lazyload">
                            </div>
                            <p>Youtube</p>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="~@/assets/img/index/icon_google.png" class="lazyload">
                            </div>
                            <p>Google</p>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="foot-version">Copyright ©Global, All Rights Reserved. </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    import HbHead from '@/components/HbHead'
    import introVersion from '@/components/introVersion'

    export default {
        components: {
            HbHead,
            introVersion
        },
        data() {
            return {
                test: 'Hello World!'
            }
        },
        methods: {},
        mounted() {

        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
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

    .main-wapper{
        width:100%;
        min-width: 1200px;
        overflow-x:hidden;
        background:#002035;
        .main-content{
            width:1200px;
            margin:0px auto;
            .session1{
                position:relative;;
                width:100%;
                height:648px;
                .bg{
                    width:1920px;
                    height:648px;
                    position:absolute;
                    left:50%;
                    margin-left:-960px;
                }

                .title{
                    position:relative;
                    z-index: 2;
                    font-size:70px;
                    line-height:70px;
                    color:#fff;
                    text-align:center;
                    font-weight: 400;
                }
            }
        }
        .session2{
            min-width:980px;
            padding:80px;
            margin:0px auto;
            ul{
                li{
                    float:left;
                    width:20%;
                    height:auto;
                    text-align:center;

                    .img-box{
                        height:70px;
                        line-height:70px;
                        text-align:center;
                        img{
                            display:inline-block;
                            width:auto;
                            height:auto;
                        }
                    }

                    .txt-box{
                        margin-top:30px;
                        height:50px;
                        line-height:50px;
                        color:#fff;
                        text-align:center;
                        strong{
                            font-size:50px;
                            font-weight: 400;
                        }
                        span{
                            font-size:22px;
                            font-weight: 400;
                        }
                        em{
                            font-size:40px;
                            font-weight:400;
                            font-style: normal;
                        }
                    }

                    p{
                        margin-top:10px;
                        text-align:center;
                        color:#fff;
                        font-size:14px;
                    }
                }
            }
        }
        .session3{
            position:relative;;
            width:100%;
            height:1304px;
            min-width:1200px;
            margin:0px auto;
            .bg{
                width:1920px;
                height:1304px;
                position:absolute;
                left:50%;
                margin-left:-960px;
            }

            .session3-inner{
                position:relative;
                z-index:2;
                padding-top:90px;
                height:1210px;

                h1{
                    font-size:50px;
                    line-height:50px;
                    color:#fff;
                    text-align:center;
                    font-weight:400;
                    letter-spacing: 5px;
                }

                .white-bar{
                    margin:18px auto 0px auto;
                    width:60px;
                    height:6px;
                    background-color: #fff;
                }

                .content-p{
                    font-size:27px;
                    line-height:41px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight:200;
                    color:#fff;
                    margin-top:40px;
                    margin-bottom:110px;
                    text-indent: 140px;
                    padding:0px 80px;
                }

                .item-list{
                    width:1200px;
                    margin:100px auto 0px auto;
                    li{
                        width:25%;
                        text-align:center;
                        float:left;
                        margin-bottom:70px;

                        .img-box{
                            height:100px;
                            text-align:center;
                            img{
                                display:inline-block;
                                width:auto;
                                height:auto;
                            }
                        }

                        p{
                            font-size:22px;
                            line-height:22px;
                            color:#fff;
                            padding-top:18px;
                            text-align: center;
                        }
                    }
                }

                .foot-version{
                    position:absolute;
                    width:100%;
                    font-size:20px;
                    line-height:20px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight: 200;
                    bottom:55px;
                    color:#fff;
                }

            }
        }
        .session4{
            position:relative;;
            width:100%;
            min-width:1200px;
            margin:0px auto;
            height:auto;

            .s4-bg-box{
                position:absolute;
                width:1920px;
                height:2708px;
                background:#00355d;
                left:50%;
                margin-left:-960px;
                top:0px;
                .color-bg{
                    width:1920px;
                    height:1600px;
                    background:#00355d;
                }
                .s4-bg{
                    width:1920px;
                    height:1108px;
                    vertical-align: top;
                }
            }

            .session4-inner{
                position:relative;
                z-index:2;
                padding-top:90px;
                height:2618px;

                h1{
                    font-size:50px;
                    line-height:50px;
                    color:#fff;
                    text-align:center;
                    font-weight:400;
                    letter-spacing: 5px;
                }

                .white-bar{
                    margin:18px auto 0px auto;
                    width:60px;
                    height:6px;
                    background-color: #fff;
                }

                .content-p{
                    padding:0px 80px;
                    font-size:27px;
                    line-height:41px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight:200;
                    color:#fff;
                    margin-top:40px;
                    margin-bottom:110px;
                    text-indent: 140px;
                }

                .item-list{
                    width:1200px;
                    margin:100px auto 0px auto;
                    li{
                        width:25%;
                        text-align:center;
                        float:left;
                        margin-bottom:70px;

                        .img-box{
                            height:100px;
                            text-align:center;
                            img{
                                display:inline-block;
                                width:auto;
                                height:auto;
                            }
                        }

                        p{
                            font-size:22px;
                            line-height:22px;
                            color:#fff;
                            padding-top:18px;
                            text-align: center;
                        }
                    }
                }

                .develop-box{
                    width:624px;
                    height: auto;
                    padding:128px 0px;
                    position:relative;
                    margin:0px auto;

                    .develop-item{
                        width:624px;
                        .develop-left{
                            width:325px;
                            float:left;
                            div{
                                background:url(~@/assets/img/about/big_ball.png) no-repeat right center;
                                text-align:right;
                                font-size:46px;
                                line-height:46px;
                                color:#0074c2;
                                padding-right:40px;
                                font-weight: bolder;
                            }
                            p{
                                position:relative;
                                text-align:right;
                                padding-right:35px;
                                border-right:3px solid #fff;
                                right:12px;
                                font-size:20px;
                                line-height:35px;
                                font-weight: 100;
                                color:#fff;
                                letter-spacing: 2px;
                                strong{
                                    font-size:28px;
                                    font-weight: 400;
                                }
                            }
                        }

                        .develop-right{
                            width:323px;
                            float:right;
                            div{
                                background:url(~@/assets/img/about/small_ball.png) no-repeat left center;
                                text-align:left;
                                font-size:46px;
                                line-height:46px;
                                color:#0074c2;
                                padding-left:40px;
                                font-weight: bolder;
                            }
                            p{
                                position:relative;
                                text-align:left;
                                padding-left:35px;
                                border-left:3px solid #fff;
                                left:10px;
                                font-size:20px;
                                line-height:35px;
                                font-weight: 100;
                                color:#fff;
                                letter-spacing: 2px;
                                strong{
                                    font-size:28px;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                    .gradient-box{
                        clear:both;
                        position:relative;;
                        width:3px;
                        height:130px;
                        margin:0px auto;
                        .gradient_img{
                            position:absolute;
                            width:3px;
                            height:130px;
                            left:50%;
                            margin-left:-2px;
                            top:0px;
                        }
                    }
                }

                .foot-version{
                    position:absolute;
                    width:100%;
                    font-size:20px;
                    line-height:20px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight: 200;
                    bottom:60px;
                    color:#fff;
                }
            }
        }
    }
</style>
