<template>
    <div class="supplier-wapper" id="supplierIndex">
        <div class="supplier-inner">
            <img src="~@/assets/img/supplier/supplier_bg.jpg" class="intro_bg1">
            <hb-head></hb-head>
            <p>{{$t('about.cooperTitle')}}</p>
        </div>
        <div class="supplier-s1">
            <div class="supplier-s1-inner">
                <div class="job-info-box">
                    <div class="job-social-box" id="job-social-box">
                        <div class="progress-div" id="progress-div">
                            <h1>{{$t('about.supplierApplication')}}</h1>
                            <div class="blue-bar"></div>
                            <div class="process-detail">
                                <div class="process-blue"></div>
                                <ul>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_1.png">
                                        <p>{{$t('about.applicationProcess1')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_2.png">
                                        <p>{{$t('about.applicationProcess2')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_3.png">
                                        <p>{{$t('about.applicationProcess3')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_4.png">
                                        <p>{{$t('about.applicationProcess4')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_5.png">
                                        <p>{{$t('about.applicationProcess5')}}</p>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div style="display:none;">
                            <h1>供应商注册</h1>
                            <div class="blue-bar"></div>
                            <div class="social-detail">
                                <div class="social-nav-box">
                                    <ul class="socail-nav" id="socail-nav">
                                        <li class="current">基础信息</li>
                                        <li>联系方式</li>
                                        <li>资质证明</li>
                                        <li>供应商概况</li>
                                    </ul>
                                    <div class="social-nav-bar" id="social-nav-bar"></div>
                                </div>
                                <div class="form-info">
                                    <div class="horse-box">
                                        <ul>
                                            <li><label><i>*</i>公司电话：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>法人/经营者：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>统一社会信用代码/注册号：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>公司成立时间：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>公司地址：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>公司简历：</label><input type="text" placeholder="请输入"></li>
                                        </ul>
                                    </div>
                                    <div class="horse-box">
                                        <ul>
                                            <li><label><i>*</i>联系人姓名：</label><input type="text" placeholder="请输入"></li>
                                            <li><label>联系人座机电话：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>联系人手机号码：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>联系人邮箱地址：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>联系人QQ：</label><input type="text" placeholder="请输入"></li>
                                        </ul>
                                    </div>
                                    <div class="horse-box">
                                        <ul>
                                            <li><label><i>*</i>营业执照：</label>
                                                <div class="upload-box">
                                                    <img src="~@/assets/img/recruit/upload.png">
                                                    <span>上传文件</span>
                                                </div></li>
                                            <li><label><i>*</i>规模类型：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>供应商类型：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>从业人数：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>是否为长期经营：</label><input type="text" placeholder="请输入"></li>
                                        </ul>
                                    </div>
                                    <div class="horse-box">
                                        <ul>
                                            <li><label><i>*</i>主要经营类目：</label>
                                                <div class="check-box">
                                                    <label><input type="checkbox" name="category" value="男装">男装</label>
                                                    <label><input type="checkbox" name="category" value="男鞋">男鞋</label>
                                                    <label><input type="checkbox" name="category" value="男包">男包</label>
                                                    <label><input type="checkbox" name="category" value="女装">女装</label>
                                                    <label><input type="checkbox" name="category" value="女鞋">女鞋</label>
                                                    <label><input type="checkbox" name="category" value="女包">女包</label>
                                                    <label><input type="checkbox" name="category" value="配饰">配饰</label>
                                                    <label><input type="checkbox" name="category" value="婴童">婴童</label>
                                                    <label><input type="checkbox" name="category" value="玩具">玩具</label>
                                                    <label><input type="checkbox" name="category" value="美妆">美妆</label>
                                                    <label><input type="checkbox" name="category" value="家居服">家居服</label>
                                                    <label><input type="checkbox" name="category" value="家居装饰">家居装饰</label>
                                                    <label><input type="checkbox" name="category" value="生活用品">生活用品</label>
                                                    <label><input type="checkbox" name="category" value="餐具&收纳">餐具&收纳</label>
                                                    <label><input type="checkbox" name="category" value="床品&浴室用品">床品&浴室用品</label>
                                                    <label><input type="checkbox" name="category" value="手机&数码">手机&数码</label>
                                                    <label><input type="checkbox" name="category" value="家用电器">家用电器</label>
                                                    <label><input type="checkbox" name="category" value="运动服饰">运动服饰</label>
                                                    <label><input type="checkbox" name="category" value="运动配饰">运动配饰</label>
                                                    <label><input type="checkbox" name="category" value="运动鞋">运动鞋</label>
                                                    <label><input type="checkbox" name="category" value="内衣">内衣</label>
                                                    <label><input type="checkbox" name="category" value="婚纱">婚纱</label>
                                                    <label><input type="checkbox" name="category" value="婴童用品">婴童用品</label>
                                                    <label><input type="checkbox" name="category" value="童装">童装</label>
                                                    <label><input type="checkbox" name="category" value="婚庆用品">婚庆用品</label>
                                                </div>
                                            </li>
                                            <li><label>合作过的电商平台：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>主要销售国家和地区：</label><input type="text" placeholder="请输入"></li>
                                            <li><label>正在合作的电商平台：</label><input type="text" placeholder="请输入"></li>
                                            <li><label>最近一年销售金额：</label><input type="text" placeholder="请输入"></li>
                                            <li><label><i>*</i>每月产品上新数量：</label><input type="text" placeholder="请输入"></li>
                                            <li>
                                                <label><i>*</i>经营商品图片上传：</label>
                                                <div class="upload-box">
                                                    <img src="~@/assets/img/recruit/upload.png">
                                                    <span>上传文件</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="supplier-promise">
                                        <div class="read-box"><input type="checkbox"><a href="./notice.html" target="_blank">我已阅读并同意《供应商须知》</a></div>
                                        <div class="btn-box">
                                            <div class="sure-btn">确定</div>
                                            <div class="reset-btn">重置</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div style="width:100%;min-width:1200px;background:#000;">
            <introVersion></introVersion>
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

    .supplier-wapper{
        width:100%;
        min-width: 1200px;
        overflow-x:hidden;

        .supplier-inner{
            position:relative;
            width:1200px;
            height:786px;
            margin:0px auto;

            .intro_bg1{
                position:absolute;
                width:1920px;
                height:786px;
                top:0px;
                left:50%;
                margin-left:-960px;
            }

            p{
                position:absolute;
                width:100%;
                color:#fff;
                font-weight: 200;
                letter-spacing: 2px;
                font-size:41px;
                line-height:72px;
                text-align:right;
                bottom:120px;
            }

        }

        .supplier-s1{
            width:100%;
            height:auto;

            .supplier-s1-inner{
                width:1200px;
                margin:0px auto;
                position:relative;

                .job-info-box{
                    padding-top:100px;
                    margin-bottom:200px;

                    .progress-div{
                        .process-detail{
                            position:relative;
                            width:1300px;
                            height:auto;
                            margin:100px 0px;
                            ul{
                                width:1300px;
                                height:auto;
                                li{
                                    position:relative;
                                    display:table;
                                    width:180px;
                                    height:180px;
                                    padding:10px;
                                    float:left;
                                    margin-right:46px;
                                    overflow:hidden;
                                    background-color: #fff;
                                    vertical-align: middle;
                                    text-align:center;

                                    p{
                                        display:table-cell;
                                        position:relative;
                                        z-index: 2;
                                        line-height:40px;
                                        text-align:center;
                                        font-size:30px;
                                        color:#525257;
                                        font-weight:100;
                                        vertical-align: middle;
                                        text-align:center;
                                    }

                                    img{
                                        position:absolute;
                                        width:200px;
                                        height:200px;
                                        left:50%;
                                        top:50%;
                                        margin-left:-100px;
                                        margin-top:-100px;
                                    }
                                }
                            }
                            .process-blue{
                                width:1000px;
                                height:1px;
                                border-bottom:4px dashed #005d9b;
                                position:absolute;
                                left:50%;
                                top:50%;
                                margin-left:-500px;
                                margin-top:-1px;
                            }
                        }
                    }

                    h1{
                        font-size:50px;
                        line-height:78px;
                        color:#0074c2;
                        text-align:center;
                        clear:both;
                    }
                    .blue-bar{
                        width:60px;
                        height:6px;
                        background-color: #0074c2;
                        margin:0px auto;
                    }

                    .social-detail{
                        margin-top:100px;
                        box-shadow: 0 0 20px #888;
                        padding:75px 0px 0px 0px;

                        .social-nav-box{
                            position:relative;
                            border-bottom:1px solid #c9c9c9;
                            height:60px;
                            padding:0px 60px;
                            ul{
                                width:1080px;
                                li{
                                    width:270px;
                                    height:60px;
                                    line-height:60px;
                                    text-align:center;
                                    overflow:hidden;
                                    float:left;
                                    color:#c9c9c9;
                                    font-weight:100;
                                    font-size:22px;
                                    cursor:pointer;
                                }

                                .current{
                                    color:#0074c2;
                                }
                            }

                            .social-nav-bar{
                                position:absolute;
                                width:270px;
                                height:8px;
                                background-color: #0074c2;
                                left:60px;
                                bottom:-1px;
                            }
                        }

                        .form-info{
                            position:relative;
                            width:1200px;
                            height:auto;
                            margin:0px auto;
                            overflow:hidden;

                            .horse-box{
                                width:948px;
                                margin:0px auto 30px auto;
                                padding:30px 0px;
                                display:none;

                                ul{
                                    li{
                                        clear:both;
                                        margin-bottom:20px;

                                        i{
                                            color:#e00;
                                            margin-right:5px;
                                            font-size:16px;
                                            line-height:50px;
                                        }

                                        label{
                                            display:block;
                                            width:220px;
                                            height:50px;
                                            line-height:50px;
                                            text-align:right;
                                            float:left;
                                            font-size:16px;
                                            color:#000;
                                            font-weight: 200;
                                        }

                                        input[type='text']{
                                            display:block;
                                            width:624px;
                                            height:22px;
                                            background-color: #fff;
                                            border:1px solid #c9c9c9;
                                            -webkit-border-radius: 10px;
                                            -moz-border-radius: 10px;
                                            border-radius: 10px;
                                            outline: none;
                                            text-indent: 20px;
                                            font-size:16px;
                                            line-height:16px;
                                            padding:13px 0px;
                                            color:#c9c9c9;
                                            letter-spacing: 1px;
                                            caret-color:#e00;
                                        }

                                        textarea{
                                            display:block;
                                            width:580px;
                                            height:105px;
                                            background-color: #fff;
                                            border:1px solid #c9c9c9;-webkit-border-radius: 10px;
                                            -moz-border-radius: 10px;
                                            border-radius: 10px;
                                            color:#c9c9c9;
                                            padding:20px;
                                            font-size:16px;
                                            line-height:22px;
                                            caret-color:#e00;
                                        }

                                        .upload-box{
                                            position:relative;
                                            width:138px;
                                            height:28px;
                                            line-height:28px;
                                            border:1px solid #c9c9c9;
                                            -webkit-border-radius: 5px;
                                            -moz-border-radius: 5px;
                                            border-radius: 5px;
                                            float:left;
                                            margin-top:15px;
                                            background-color: #fff;
                                            cursor:pointer;

                                            &:hover{
                                                background-color: #eee;
                                            }

                                            img{
                                                width:22px;
                                                height:auto;
                                                margin-left:10px;
                                                margin-right:2px;
                                                margin-top:-5px;
                                            }

                                            span{
                                                font-size:20px;
                                                color:#c9c9c9;
                                                font-weight:100;
                                            }
                                        }
                                    }
                                }
                                .check-box{
                                    width:700px;
                                    height:auto;
                                    float:left;
                                    padding-top:10px;
                                    label{
                                        display:block;
                                        width:200px;
                                        height:30px;
                                        line-height:30px;
                                        text-align:left;
                                        margin-bottom:20px;
                                        float:left;
                                        font-weight:100;
                                        color:#000;
                                        cursor:pointer;
                                        input{
                                            display:inline-block;
                                            width:15px;
                                            height:15px;
                                            margin-right:5px;
                                            vertical-align: middle;
                                        }
                                    }
                                }
                            }

                            .supplier-promise{
                                width:1200px;
                                margin:0px auto;
                                background-color: #eef8ff;
                                padding:80px 0px 54px 0px;

                                .read-box{
                                    text-align:center;
                                    margin-bottom:60px;
                                    line-height: 22px;
                                    vertical-align: middle;

                                    input{
                                        display:inline-block;
                                        width:22px;
                                        height:22px;
                                        line-height:22px;
                                        vertical-align: middle;
                                        margin-right:10px;
                                        margin-top:-2px;
                                    }

                                    a{
                                        font-size:22px;
                                        line-height:24px;
                                        color:#0074c2;
                                        font-weight:200;

                                        &:hover{
                                            color:#0074a2;
                                            border-bottom:1px solid #0074a2;
                                        }
                                    }
                                }

                                .btn-box{
                                    width:670px;
                                    height:90px;
                                    margin:0px auto;
                                    .sure-btn,.reset-btn{
                                        width:324px;
                                        height:84px;
                                        line-height: 84px;
                                        text-align: center;
                                        font-size:36px;
                                        -webkit-border-radius: 10px;
                                        -moz-border-radius: 10px;
                                        border-radius: 10px;
                                        font-weight: 100;
                                        letter-spacing: 2px;
                                        cursor:pointer;
                                    }
                                    .sure-btn{
                                        float:left;
                                        background-color: #0074c2;
                                        color:#fff;
                                        border:1px solid #0074c2;

                                        &:hover{
                                            background-color: #0074a0;
                                        }
                                    }
                                    .reset-btn{
                                        float:right;
                                        background-color: #fff;
                                        color:#000;
                                        border:1px solid #c9c9c9;

                                        &:hover{
                                            background-color: #aaa;
                                            color:#fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
