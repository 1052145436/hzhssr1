<template>
    <div class="recruit-wapper">
        <div class="recruit-inner">
            <img src="~@/assets/img/recruit/recruit_bg.jpg" class="intro_bg1">
            <HbHead></HbHead>
            <p>{{$t('about.stage')}}</p>
        </div>
        <div class="recruit-s1">
            <div class="recruit-s1-inner">
                <div class="recruit-nav-box">
                    <ul id="recruit-nav">
                        <li v-for="(item,key) in recruitNavList" :key="'x2'+key" :class="recruitNavIndex == key?'current':''" @click="changeRecruitNav(key)">{{$t(item)}}</li>
                    </ul>
                </div>
                <div class="job-info-box">
                    <div class="job-social-box" id="job-social-box">
                        <div class="progress-div" id="progress-div">
                            <h1>{{$t('about.recruitmentProcess')}}</h1>
                            <div class="blue-bar"></div>
                            <div class="process-detail">
                                <div class="process-blue"></div>
                                <ul>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_1.png">
                                        <p>{{$t('about.campusRecruitmentDesc1')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_2.png">
                                        <p>{{$t('about.campusRecruitmentDesc2')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_3.png">
                                        <p>{{$t('about.campusRecruitmentDesc3')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_4.png">
                                        <p>{{$t('about.campusRecruitmentDesc4')}}</p>
                                    </li>
                                    <li>
                                        <img src="~@/assets/img/recruit/circle_5.png">
                                        <p>{{$t('about.campusRecruitmentDesc5')}}</p>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <h1>{{$t('about.recruitmentPosition')}}</h1>
                        <div class="blue-bar"></div>
                        <div class="social-detail">
                            <div class="social-nav-box">
                                <ul class="socail-nav" id="socail-nav">
                                    <li v-for="(item4,key4) in jobNavList" :key="'a'+key4"
                                        :class="jobNavIndex == key4?'current':''" @click="jobNavClick(key4)">{{item4}}
                                    </li>
                                </ul>
                                <div class="social-nav-bar" id="social-nav-bar"></div>
                            </div>
                            <div class="socail-job-list-box">
                                <ul class="job-list-nav">
                                    <li v-for="(item5,key5) in jobDetailNav" :key="'s'+key5">{{item5}}</li>
                                </ul>
                                <div class="social-job-item" v-for="(item6,key6) in jobJson[jobNavIndex]"
                                     :key="'m'+key6">
                                    <ul @click="showJobDetailByIndex(item6)" style="background-color: #fafafa;">
                                        <li>{{item6.positionName}}</li>
                                        <li>{{item6.numberOfRecruits}}</li>
                                        <li>{{item6.workingAddress}}</li>
                                    </ul>
                                    <div class="job-request" v-show="item6.isShow == true">
                                        <h1>岗位职责：</h1>
                                        <p v-for="(item2,key2) in item6.workDesc.jobResponsibilities" :key="'b'+key2">
                                            {{item2}}</p>
                                        <h1>岗位要求：</h1>
                                        <p v-for="(item3,key3) in item6.workDesc.jobRequirements" :key="'c'+key3">
                                            {{item3}}</p>
                                        <a href="javascript:;" style="display:none;">申请职位</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="job-personnel-box" id="job-personnel-box">
                        <h1>引荐信息</h1>
                        <div class="blue-bar"></div>
                        <div class="personnel-detail">
                            <h2>引荐奖励机制</h2>
                            <div class="person-condition">
                                <p>需求职位：</p>
                                <p>1. XXX；被举荐人成功入职并转正后奖励“伯乐”XX RMB；</p>
                                <p>1. XXX；被举荐人成功入职并转正后奖励“伯乐”XX RMB；</p>
                            </div>
                            <h2>引荐方式</h2>
                            <div class="person-choose">
                                <div class="horse-box">
                                    <h3>千里马信息</h3>
                                    <ul>
                                        <li><label>姓名：</label><input type="text" placeholder="请输入"></li>
                                        <li><label>性别：</label><input type="text" placeholder="请输入"></li>
                                        <li><label>现居地：</label><input type="text" placeholder="请输入"></li>
                                        <li><label>联系方式：</label><input type="text" placeholder="请输入"></li>
                                    </ul>
                                </div>
                                <div class="horse-box">
                                    <h3>伯乐信息</h3>
                                    <ul>
                                        <li><label>姓名：</label><input type="text" placeholder="请输入"></li>
                                        <li><label>联系方式：</label><input type="text" placeholder="请输入"></li>
                                        <li><label>与被举荐人关系：</label><input type="text" placeholder="请输入"></li>
                                        <li><label>推荐理由：</label><textarea type="text" placeholder="请输入"></textarea></li>
                                        <li><label>千里马简历：</label>
                                            <div class="upload-box">
                                                <img src="~@/assets/img/recruit/upload.png">
                                                <span>上传文件</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                test: 'Hello World!',
                jobNavIndex: 0,
                showJobIndex: -1,
                recruitNavIndex:0,
                recruitNavList:['about.socialRecruitment','about.campusRecruitment'],
                jobDetailNav: ['职位名称', '招聘人数', '工作地点'],
                jobNavList: ['商品组', '客户体验部', '运营部', '创新中心', '研发中心'],
                jobJson: {
                    '0': [
                        {
                            isShow: false,
                            // 职位名称
                            positionName: 'UI设计师',
                            // 招聘人数
                            numberOfRecruits: '5名',
                            // 工作地址
                            workingAddress: '重庆',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、完成上架商品的图片收集处理，文案整理等基础工作；',
                                    '2、按照工作标准每天在商城后台保质保量完成对应的商品上架。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、熟练运用Photoshop进行图片设计与处理；',
                                    '2、大学英语四级及以上；',
                                    '3、实习生每周五天制，兼职每周3天及以上。'
                                ]
                            }
                        }
                    ],
                    '1': [
                        {
                            isShow: false,
                            // 职位名称
                            positionName: '订单组运营专员',
                            // 招聘人数
                            numberOfRecruits: '15名',
                            // 工作地址
                            workingAddress: '重庆',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、处理延迟发货异常订单审核；',
                                    '2、核实物流售后的异常订单，争取客户重派，提高签收率。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、阿拉伯语专业优先；',
                                    '2、会PS、社交软件达人、有新媒体运营经验者优先；',
                                    '3、实习生每周五天制，兼职每周3天及以上。'
                                ]
                            }
                        },
                        {
                            isShow: false,
                            // 职位名称
                            positionName: '咨询组运营专员',
                            // 招聘人数
                            numberOfRecruits: '5名',
                            // 工作地址
                            workingAddress: '重庆',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、维护粉丝页，回复客户售前售后咨询；',
                                    '2、在线回复客户咨询并引导客户完成下单；'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、英语四级及以上，懂阿语者优先；',
                                    '2、实习生每周五天制，兼职每周3天及以上。'
                                ]
                            }
                        }
                    ],
                    '2': [
                        {
                            isShow: false,
                            // 职位名称
                            positionName: '媒体运营专员',
                            // 招聘人数
                            numberOfRecruits: '5名',
                            // 工作地址
                            workingAddress: '重庆',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、拓展Instagram 和Youtube红人资源，商谈合作，推广商品带单。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、熟悉红人拓展方式和常规合作模式；',
                                    '2、英语六级以上，阿语优先；',
                                    '3、工作以结果为导向，责任性强，有较强的业务上进心，喜欢玩社交软件，善于挖掘社交媒体流量资源。'
                                ]
                            }
                        }
                    ],
                    '3': [
                        {
                            isShow: false,
                            // 职位名称
                            positionName: '投放优化师',
                            // 招聘人数
                            numberOfRecruits: '5名',
                            // 工作地址
                            workingAddress: '广州',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、负责今日头条、腾讯广点通等平台的信息流运营投放，包括常规投放及创建制定新的投放计划，进行各种运营数据分析和决策，及时调整优化推广策略；',
                                    '2、了解互联网广告投放风向，根据客户需求制作相应广告素材，有能力单独出具创意及转化较好的落地页（重要），负责数据报表统计、监控以及广告账户操作；',
                                    '3、熟悉互联网DSP主流合作模式和信息流广告的投放模式，并能熟练操作账户后台对投放形式及效果进行全方面的评估；',
                                    '4、负责广告投放及投放时间、对象、人群定价、消耗设定与实时监测，出现任何不良消耗和转化不稳定，及时查明原因并进行对应策略和调整计划实施；',
                                    '5、负责对广告素材、投放效果数据进行分析总结，为新广告的设计明确思路，提高转化，优化产品推广的运营业绩；',
                                    '6、跟踪月/周/日运营指标，收集渠道市场信息，及时作出汇总分析，提出整改建议；',
                                    '7、负责不同平台信息流的开发，尽可能多的拓展广告渠道；',
                                    '8、熟练使用PPT、EXCEL等常用文本编辑及数据处理工具。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、具备腾讯、今日头条、百度sem、DSP平台的操作推广经验；',
                                    '2、热爱互联网，喜欢创新，对网络热点有强烈的嗅觉和敏感度；',
                                    '3、文字功底扎实，有较强的策划、文案撰写能力；',
                                    '4、乐于学习和探索，工作细致、耐心、执行力强；',
                                    '5、有责任心、抗压能力，以及推动能力强，具有良好的敬业精神及团队精神，并擅于沟通；',
                                    '6、有二类电商运营相关工作经验优先。'
                                ]
                            }
                        },
                        {
                            isShow: false,
                            // 职位名称
                            positionName: '见习投放优化师（应届生）',
                            // 招聘人数
                            numberOfRecruits: '20名',
                            // 工作地址
                            workingAddress: '广州',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、基本熟悉了解电商平台相关运营工作；',
                                    '2、负责今日头条、腾讯广点通等平台进行对接沟通，对营销数据、交易数据、商品管理等问题进行学习沟通并实践实施，最终完成公司业绩目标；',
                                    '3、策划产品推广活动，提高产品点击率和浏览量，最终提高转换率，最大化扩大运营效益；',
                                    '4、定期对推广效果进行销售跟踪、评估，提交统计分析报表，及时提出营销改进措施；',
                                    '5、完成领导临时安排的各项工作。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、熟悉网络营销运营模式，熟悉基本宣传工具；',
                                    '2、具有营销活动策划和组织能力；',
                                    '3、具有一定的分析能力，善于总结，有较强的领导能力；',
                                    '4、善于沟通，应变能力较强，具有突发事情的处理能力，有较强的服务意识，具有良好的职业素质和团队合作精神。'
                                ]
                            }
                        }
                    ],
                    '4': [
                        {
                            isShow: false,
                            // 职位名称
                            positionName: 'web前端工程师',
                            // 招聘人数
                            numberOfRecruits: '1名',
                            // 工作地址
                            workingAddress: '广州',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、负责电商系统及网站Web端页面开发、前端重构与技术难题攻关；',
                                    '2、负责对产品页面进行性能优化，实现极速加载；',
                                    '3、配合UI设计师和后端工程师高保真输出产品界面，和实现  功能，服从团队安排；',
                                    '4、持续优化前端代码，对代码进行重构。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、统招本科及以上学历；至少2年以上前端开发经验；对前端专业的持续热情与探索欲望；',
                                    '2、精通HTML5、CSS3、JavaScript；',
                                    '3、熟练使用jquery、bootstrap3等开源框架；',
                                    '4、熟悉requirejs、webpack使用，能独立开发常用组件；',
                                    '5、掌握主流浏览器兼容性问题处理；',
                                    '6、具有良好的代码习惯、优秀的学习能力；具备一定的UI视觉能力；',
                                    '7、熟悉前端调试工具，有前端性能优化实践者优先；',
                                    '8、有传统基于后端PHP渲染项目的前端开发经验优先。'
                                ]
                            }
                        },
                        {
                            isShow: false,
                            // 职位名称
                            positionName: 'PHP高级开发工程师',
                            // 招聘人数
                            numberOfRecruits: '5名',
                            // 工作地址
                            workingAddress: '广州',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、负责公司电商系统开发与维护；',
                                    '2、参与需求分析、与相关人员一起探讨、设计、实现产品的新功能及改进；',
                                    '3、持续改进既有代码、架构，以应对日益增长的业务需求。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、对PHP有浓厚的兴趣，并立志从事PHP研发工作 ；',
                                    '2、熟练掌握PHP、JavaScript、html、css的使用，掌握mysql语句调优方法；',
                                    '3、吃苦耐劳，有一定的自我约束和控制能力，意志力坚强 ；',
                                    '4、沟通表达理解能力好，听说能力强 ；',
                                    '5、统招本科计算机专业优先。',
                                    '优先条件:',
                                    '1. 对代码风格、质量有洁癖，惜码如金，习惯做Code Review',
                                    '2. 对开源软件、敏捷开发方法有特别兴趣，开源社区贡献者',
                                    '3. 乐于分享，互联网技术社区热心参与和内容贡献者',
                                    '4、吃苦耐劳，有拼搏精神，乐于加班',
                                    '5、熟练使用yii2或其他一款框架',
                                    '6、参与开发过大流量、高并发系统'
                                ]
                            }
                        },
                        {
                            isShow: false,
                            // 职位名称
                            positionName: '产品经理',
                            // 招聘人数
                            numberOfRecruits: '2名',
                            // 工作地址
                            workingAddress: '广州',
                            // 职位描述
                            workDesc: {
                                // 岗位职责
                                jobResponsibilities: [
                                    '1、负责需求收集与分析，从多种渠道了解需求、竞品动态与市场趋势，制定产品路线与迭代计划；',
                                    '2、撰写详细的产品需求文档、流程图及原型，跟踪产品研发进度；',
                                    '3、协调技术开发团队，跟踪产品研发进度，负责进度管理、版本管理、验收测试、评审发布、产品上线等相关工作；',
                                    '4、负责电商产品实施方案的制定、项目工作计划的安排。'
                                ],
                                // 岗位要求
                                jobRequirements: [
                                    '1、2年或以上产品设计经验；',
                                    '2、熟练使用Axure、Visio等产品常用软件，了解技术实施原理；',
                                    '3、具有优秀的项目计划、组织、领导、控制能力，达成预定的项目目标；',
                                    '4、具备严谨的逻辑能力，拥有一定的问题分析和解决能力；',
                                    '5、工作认真负责，学习能力强，喜欢在IT技术、企业信息化等领域内钻研；',
                                    '6、正规本科院校计算机、软件工程等相关专业优先考虑。'
                                ]
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            // 各部门点击，切换显示各部门的招聘职位信息
            jobNavClick(index) {
                this.$set(this, 'jobNavIndex', index);
                document.getElementById('social-nav-bar').style.left = 60 + this.jobNavIndex * 180 + "px";
            },
            // 显示招聘职位的详细信息
            showJobDetailByIndex(item) {
                this.$set(item, 'isShow', !item.isShow);
            },
            // 校园招聘、社会招聘
            changeRecruitNav(index){
              this.$set(this,'recruitNavIndex',index);
              this.$set(this,'jobNavIndex',0);
            }
        },
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

    .recruit-wapper {
        width: 100%;
        min-width: 1200px;
        overflow-x: hidden;

        .recruit-inner {
            position: relative;
            width: 1200px;
            height: 786px;
            margin: 0px auto;

            .intro_bg1 {
                position: absolute;
                width: 1920px;
                height: 786px;
                top: 0px;
                left: 50%;
                margin-left: -960px;
            }

            p {
                position: absolute;
                width: 100%;
                color: #fff;
                font-weight: 200;
                letter-spacing: 2px;
                font-size: 41px;
                line-height: 72px;
                text-align: right;
                bottom: 120px;
            }

        }

        .recruit-s1 {
            width: 100%;
            height: auto;

            .recruit-s1-inner {
                width: 1200px;
                margin: 0px auto;
                position: relative;

                .recruit-nav-box {
                    width:100%;
                    position: relative;
                    height: 186px;
                    ul {
                        width:100%;
                        height: 186px;
                        border-left: 1px solid #b3b3b3;
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display:table;
                        vertical-align: middle;
                        text-align:center;
                        li {
                            display:table-cell;
                            height: 185px;
                            line-height: 55px;
                            font-size: 40px;
                            background-color: #fff;
                            color: #b3b3b3;
                            border-right: 1px solid #b3b3b3;
                            border-bottom: 1px solid #b3b3b3;
                            cursor: pointer;
                            font-weight: 100;
                            vertical-align: middle;
                            text-align:center;
                        }

                        .current {
                            background-color: #eeeeee;
                            color: #0074c2;
                        }
                    }

                    .recruit-point {
                        position: absolute;
                        left: 185px;
                        bottom: 0px;
                        width: 28px;
                        height: 17px;
                    }
                }

                .job-info-box {
                    padding-top: 100px;
                    margin-bottom: 200px;

                    .progress-div {
                        display: none;
                        .process-detail {
                            position: relative;
                            width: 1300px;
                            height: auto;
                            margin: 100px 0px;
                            ul {
                                width: 1300px;
                                height: auto;
                                list-style: none;
                                padding: 0;
                                margin: 0;
                                li {
                                    position: relative;
                                    width: 200px;
                                    height: 200px;
                                    float: left;
                                    margin-right: 46px;
                                    overflow: hidden;
                                    background-color: #fff;

                                    p {
                                        position: relative;
                                        z-index: 2;
                                        line-height: 200px;
                                        text-align: center;
                                        font-size: 36px;
                                        color: #525257;
                                        font-weight: 100;
                                    }

                                    img {
                                        position: absolute;
                                        width: 200px;
                                        height: 200px;
                                        left: 0;
                                        top: 0;
                                    }
                                }
                            }
                            .process-blue {
                                width: 1000px;
                                height: 1px;
                                border-bottom: 4px dashed #005d9b;
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                margin-left: -500px;
                                margin-top: -1px;
                            }
                        }
                    }

                    h1 {
                        font-size: 50px;
                        line-height: 78px;
                        color: #0074c2;
                        text-align: center;
                        clear: both;
                    }
                    .blue-bar {
                        width: 60px;
                        height: 6px;
                        background-color: #0074c2;
                        margin: 0px auto;
                    }

                    .social-detail {
                        margin-top: 100px;
                        box-shadow: 0 0 20px #888;
                        padding: 75px 0px 100px 0px;

                        .social-nav-box {
                            position: relative;
                            border-bottom: 1px solid #c9c9c9;
                            height: 60px;
                            padding: 0px 60px;
                            ul {
                                width: 1080px;
                                list-style: none;
                                padding: 0;
                                margin: 0;
                                li {
                                    width: 180px;
                                    height: 60px;
                                    line-height: 60px;
                                    text-align: center;
                                    overflow: hidden;
                                    float: left;
                                    color: #c9c9c9;
                                    font-weight: 100;
                                    font-size: 22px;
                                    cursor: pointer;
                                }

                                .current {
                                    color: #0074c2;
                                }
                            }

                            .social-nav-bar {
                                position: absolute;
                                width: 180px;
                                height: 8px;
                                background-color: #0074c2;
                                left: 60px;
                                bottom: -1px;
                            }
                        }

                        .socail-job-list-box {
                            width: 1080px;
                            margin: 0px auto;
                            background-color: #fff;
                            padding-top: 50px;
                            .job-list-nav {
                                width: 100%;
                                height: 60px;
                                background-color: #eee;
                                list-style: none;
                                margin: 0;
                                padding: 0;
                                li {
                                    width: 360px;
                                    height: 60px;
                                    line-height: 60px;
                                    color: #000;
                                    font-weight: 100;
                                    text-align: center;
                                    float: left;
                                    font-size: 22px;
                                }
                            }
                            .social-job-item {
                                border-bottom: 1px solid #c9c9c9;
                                ul {
                                    width: 100%;
                                    height: 60px;
                                    cursor: pointer;
                                    list-style: none;
                                    padding: 0;
                                    margin: 0;
                                    li {
                                        width: 360px;
                                        height: 60px;
                                        line-height: 60px;
                                        color: #000;
                                        font-weight: 100;
                                        text-align: center;
                                        float: left;
                                        font-size: 20px;
                                    }
                                }
                                .job-request {
                                    clear: both;
                                    margin-top: 20px;
                                    padding-left: 110px;
                                    h1 {
                                        color: #434343;
                                        font-size: 20px;
                                        line-height: 30px;
                                        text-align: left;
                                        padding-top: 20px;
                                    }
                                    p {
                                        font-size: 16px;
                                        color: #535353;
                                        line-height: 30px;
                                        text-align: left;
                                    }

                                    a {
                                        display: block;
                                        width: 160px;
                                        height: 60px;
                                        line-height: 60px;
                                        text-align: center;
                                        font-size: 22px;
                                        background-color: #0074c2;
                                        color: #fff;
                                        margin-top: 35px;
                                        margin-bottom: 25px;
                                        font-weight: 200;
                                        text-decoration: none;

                                        &:hover {
                                            background-color: #0074a2;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .job-personnel-box {
                        display: none;
                        .personnel-detail {
                            margin-top: 100px;
                            box-shadow: 0 0 10px #888;
                            background-color: #fffcfc;

                            h2 {
                                font-size: 27px;
                                color: #0074c2;
                                text-align: center;
                                height: 60px;
                                line-height: 60px;
                                border-top: 1px solid #c9c9c9;
                                border-bottom: 1px solid #c9c9c9;
                                background-color: #eef8ff;
                            }

                            .person-condition {
                                padding: 50px 0px;
                                p {
                                    width: 600px;
                                    margin: 0px auto;
                                    line-height: 40px;
                                    font-size: 22px;
                                    color: #000;
                                    font-weight: 100;
                                }
                            }

                            .person-choose {
                                background-color: #fff;
                                padding: 45px 0px;
                                .horse-box {
                                    clear: both;
                                    height: auto;
                                    width: 948px;
                                    margin: 0px auto 30px auto;
                                    background-color: #f6f6f6;
                                    padding: 30px 0px;

                                    h3 {
                                        font-size: 27px;
                                        line-height: 50px;
                                        text-align: center;
                                        color: #535353;
                                        margin-bottom: 30px;
                                    }

                                    ul {
                                        list-style: none;
                                        padding: 0;
                                        margin: 0;
                                        li {
                                            clear: both;
                                            margin-bottom: 20px;
                                            label {
                                                display: block;
                                                width: 220px;
                                                height: 50px;
                                                line-height: 50px;
                                                text-align: right;
                                                float: left;
                                                font-size: 22px;
                                                color: #000;
                                                font-weight: 200;
                                            }

                                            input {
                                                display: block;
                                                width: 624px;
                                                height: 22px;
                                                background-color: #fff;
                                                border: 1px solid #c9c9c9;
                                                -webkit-border-radius: 10px;
                                                -moz-border-radius: 10px;
                                                border-radius: 10px;
                                                outline: none;
                                                text-indent: 20px;
                                                font-size: 16px;
                                                line-height: 22px;
                                                padding: 13px 0px;
                                                color: #c9c9c9;
                                                letter-spacing: 1px;
                                                caret-color: #e00;
                                            }

                                            textarea {
                                                display: block;
                                                width: 580px;
                                                height: 105px;
                                                background-color: #fff;
                                                border: 1px solid #c9c9c9;
                                                -webkit-border-radius: 10px;
                                                -moz-border-radius: 10px;
                                                border-radius: 10px;
                                                color: #c9c9c9;
                                                padding: 20px;
                                                font-size: 16px;
                                                line-height: 22px;
                                                caret-color: #e00;
                                            }

                                            .upload-box {
                                                position: relative;
                                                width: 138px;
                                                height: 28px;
                                                line-height: 28px;
                                                border: 1px solid #c9c9c9;
                                                -webkit-border-radius: 10px;
                                                -moz-border-radius: 10px;
                                                border-radius: 10px;
                                                float: left;
                                                margin-top: 15px;
                                                background-color: #fff;
                                                cursor: pointer;

                                                &:hover {
                                                    background-color: #eee;
                                                }

                                                img {
                                                    width: 22px;
                                                    height: auto;
                                                    margin-left: 10px;
                                                    margin-right: 2px;
                                                    margin-top: -5px;
                                                }

                                                span {
                                                    font-size: 20px;
                                                    color: #c9c9c9;
                                                    font-weight: 100;
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
        }
    }
</style>
