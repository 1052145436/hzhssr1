<template>
    <div class="home">
        <div class="cultrue-wapper">
            <div class="cultrue-inner">
                <img src="~@/assets/img/cultrue/img1.jpg" class="intro_bg1">
                <HbHead></HbHead>
                <div class="txt-info">
                    <h1>{{$t('about.globalCulture')}}</h1>
                    <p>{{$t('about.cultrueTitle')}}</p>
                </div>
            </div>
            <div class="cultrue-s2">
                <div class="cultrue-s2-inner">
                    <h1>{{$t('about.team')}}</h1>
                    <p>{{$t('about.teamTitle')}}</p>
                </div>
            </div>
            <div class="cultrue-s3">
                <div class="cultrue-s3-inner">
                    <img src="~@/assets/img/cultrue/img2.jpg" class="s3_bg">
                    <ul>
                        <li>
                            <img src="~@/assets/img/cultrue/img3.jpg">
                            <p>{{$t('about.teamTitle1')}}</p>
                        </li>
                        <li>
                            <img src="~@/assets/img/cultrue/img4.jpg">
                            <p>{{$t('about.teamTitle2')}}</p>
                        </li>
                        <li>
                            <img src="~@/assets/img/cultrue/img5.jpg">
                            <p>{{$t('about.teamTitle3')}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cultrue-s2">
                <div class="cultrue-s2-inner">
                    <h1>{{$t('about.teamStyle')}}</h1>
                    <p>{{$t('about.teamStyleDesc')}}</p>
                </div>
            </div>
            <div class="cultrue-s4">
                <div class="cultrue-s4-inner">
                    <div class="img-box">
                        <img src="~@/assets/img/cultrue/img6.jpg" class="img6">
                        <img src="~@/assets/img/cultrue/img7.jpg" class="img7">
                        <img src="~@/assets/img/cultrue/img8.jpg" class="img8">
                        <img src="~@/assets/img/cultrue/img9.jpg" class="img9">
                        <img src="~@/assets/img/cultrue/img10.jpg" class="img10">
                        <img src="~@/assets/img/cultrue/img11.jpg" class="img11">
                        <img src="~@/assets/img/cultrue/img12.jpg" class="img12">
                        <img src="~@/assets/img/cultrue/img13.jpg" class="img13">
                    </div>
                </div>
            </div>
            <div style="width:100%;min-width:1200px;background:#000;">
                <introVersion></introVersion>
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
        methods: {

        },
        mounted () {

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

    .cultrue-wapper {
        width: 100%;
        min-width: 1200px;
        overflow-x: hidden;

        .cultrue-inner {
            position: relative;
            width: 1200px;
            height: 948px;
            margin: 0px auto;

            .intro_bg1 {
                position: absolute;
                width: 1920px;
                height: 948px;
                top: 0px;
                left: 50%;
                margin-left: -960px;
            }

            .txt-info {
                position: relative;
                z-index: 2;

                h1 {
                    padding-top: 180px;
                    padding-bottom: 150px;
                    font-size: 77px;
                    line-height: 77px;
                    color: #fff;
                    font-weight: 500;
                    letter-spacing: 5px;
                }
                p {
                    color: #fff;
                    font-weight: 200;
                    letter-spacing: 2px;
                    font-size: 36px;
                    line-height: 68px;
                }
            }

        }

        .cultrue-s2 {
            background: #fff;

            .cultrue-s2-inner {
                width: 1200px;
                margin: 0px auto;
                padding: 118px 0px 100px 0px;
                background: #fff;

                h1 {
                    font-size: 50px;
                    line-height: 50px;
                    text-align: center;
                    color: #0074c2;
                    font-weight: 400;
                }

                p {
                    margin-top: 45px;
                    font-size: 36px;
                    line-height: 62px;
                    text-align: center;
                    color: #525257;
                    font-family: sans-serif;
                    font-weight: 200;
                }
            }
        }
        .cultrue-s3 {
            .cultrue-s3-inner {
                position: relative;
                width: 1200px;
                height: 462px;
                margin: 0px auto;

                .s3_bg {
                    width: 1920px;
                    height: 462px;
                    position: absolute;
                    left: 50%;
                    margin-left: -960px;
                    top: 0;
                }

                ul {
                    width: 1320px;
                    height: 462px;
                    margin: 0px auto;
                    li {
                        width: 440px;
                        height: 462px;
                        float: left;
                        overflow: hidden;
                        position: relative;

                        img {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            left: 0;
                            top: 0;
                        }

                        p {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 74px;
                            line-height: 74px;
                            font-size: 50px;
                            text-align: center;
                            color: #fff;
                            letter-spacing: 10px;
                            font-weight: 200;
                            background: url("~@/assets/img/cultrue/blue_alpha.png") repeat;
                        }
                    }
                }
            }
        }
        .cultrue-s4 {
            background: #fff;
            margin-bottom: 146px;
            .cultrue-s4-inner {
                width: 1200px;
                height: 509px;
                margin: 0px auto;
                position: relative;

                .img-box {
                    position: absolute;
                    width: 1320px;
                    height: 509px;
                    left: 50%;
                    top: 50%;
                    margin-left: -665px;
                    margin-top: -255px;

                    img {
                        position: absolute;
                    }

                    .img6 {
                        width: 349px;
                        height: 348px;
                        left: 0;
                        top: 0;
                    }
                    .img7 {
                        width: 323px;
                        height: 185px;
                        left: 349px;
                        top: 0;
                    }
                    .img8 {
                        width: 162px;
                        height: 186px;
                        left: 672px;
                        top: 0;
                    }
                    .img9 {
                        width: 322px;
                        height: 324px;
                        left: 834px;
                        top: 0;
                    }
                    .img10 {
                        width: 164px;
                        height: 510px;
                        left: 1156px;
                        top: 0;
                    }
                    .img11 {
                        width: 349px;
                        height: 162px;
                        left: 0px;
                        top: 347px;
                    }
                    .img12 {
                        width: 486px;
                        height: 324px;
                        left: 348px;
                        top: 185px;
                    }
                    .img13 {
                        width: 322px;
                        height: 186px;
                        left: 834px;
                        top: 323px;
                    }
                }
            }
        }
        .cultrue-s6 {
            width: 100%;
            background-color: #4c4c4c;

            .cultrue-s6-inner {
                width: 1200px;
                margin: 0px auto;
                padding-top: 26px;

                .align-left {
                    width: 800px;
                    float: left;
                    li {
                        float: left;
                        width: 138px;
                        padding: 24px;
                        a {
                            display: block;
                            color: #fff;
                            font-size: 19px;
                            line-height: 38px;

                            em {
                                font-size: 25px;
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
                        width: 138px;
                        padding: 24px;

                        p {
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
                    width: 96%;
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
    }
</style>
