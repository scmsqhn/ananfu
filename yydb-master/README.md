# 安安福
小程序之《安安福》

---
# 11:36 2017/5/11

H:\yydb-master

---
# 上传github
1. 获得点击id ok
2. 带参数打开页面
3. github push

上传流程 
git init
git add *
git commit -m 'update'
git remote add origin git@github.com:scmsqhn/ananfu.git
git push origin master
cd C:\Users\Administrator.WIN7U-20160924F\.ssh\
eval 'ssh-agent -s'
ssh-add id_rsa.pub
cd H:\yydb-master
git push origin master

## scroll view 右侧有白色的边
未解决

## 修改image带参数打开page
	js
		wx.navigateTo({url: "../item/item?index="+index});
	wxml
		image  src = "../../resources/images/item{{index}}.png
		
## 安安福常见问题
1、 　什么是一元夺宝？
　　一元夺宝是安安福（300033）推出的全新平台业务，旨在增加用户购买付费商品的趣味性。每个用户只需1元就有机会获得心仪的产品。
　　2、 　怎样参加一元夺宝？
　　用户登录或者注册安安福账号，就可以参加一元夺宝了。
　　参加方式：
　　选择自己喜欢的商品，选择要参与的人次并支付；每人次需要花费一元，获得一个夺宝号码，然后开始夺宝。
　　3、 　幸运号码的计算方法是什么？
　　(1)、商品的最后一个号码分配完毕后，将公示该分配时间点前本站全部商品的最后50个参与时间；
　　(2)、将这50个时间的数值进行求和(得出数值A)(每个时间按时、分、秒、毫秒的顺序组合，如20:15:25.362则为201525362)；
　　(3)、数值A除以该商品总需人次得到的余数 + 原始数 10000001，得到最终幸运号码，拥有该幸运号码者，直接获得该商品。
　　(4)、用户分配号码在【10000001，10000000+商品总人次】区间内随机产生。
　　4、怎么确定是否夺宝成功？
　　夺宝成功后会有软件push通知您夺宝成功，您也可以在我的夺宝记录查看是否夺宝成功。
　　5、 　如何查看自己是否中奖？
　　开奖后，可到“我的”页面查看是否中奖，如有中奖，如为虚拟产品会直接开通相关权限，如果为实物商品，会有恭喜中奖弹窗弹出，点击填写地址即可输入您的收货地址，当您填写完收货地址后，工作人员一般会在第二天给您电话确认收货地址，确认完收货地址后不可更改(如遇周末则需等到工作日客服才会跟您联系)，如果您没有中奖是看不到填写地址页面的哦，后期我们会逐渐优化产品，增加提前设置地址选项。
　　6、 　获取夺宝号失败怎么处理？
　　获取夺宝号失败后，夺宝金币将自动退还至您的夺宝账户，可参与其他产品夺宝，目前不支持直接退款。
　　7、如果一件商品很久都没达到总需人次怎么办？
　　若某件商品的夺宝号码从开始分配之日起90天未分配完毕，则安安福公司有权取消该件商品的夺宝活动，并向用户退还夺宝币，所退还夺宝币将在3个工作日内退还至用户账户中。

---
# 9:40 2017/5/12
## js {{}} 功能

## list 菜单,由数据生成界面
home.wxml
    <view class="goods-panel">
        <import src="tpl/goodsList.wxml"/>
        <template is="goodsList" data="{{goodsList:goodsList}}"/>
    </view>

goodsList.wxml
	<template name="goodsList">
		<block wx:for="{{goodsList}}">
			<template is="goodsItem" data="{{index:index,goods:item}}"/>
		</block>
	</template>
	
goodsList.wxml
	<template>
    	<view>
	    	<...>
		        <image/>
    	</view>
	</template>
	
### bug list

1. 微信小程序图片自适应

imageLoad

2. 上传代码
3. 实现服务器部分
4. goods 数据结构:
---
goods:
	buyUnit 最小投注单位
	desc 产品描述
	id 期数,产品标示?
	imgUrl 图片位置 png 格式
period: 211116272 期数
takerate: 0.01, 投注进度
takechances: 70, 当前投注金额 
totalchances: 8090,  总投注金额
winner: "铁木真" 得主
datestart:开售时间
dateend:开奖时间
---

下单信息
orderNum:订单号
orderTime:下单时间 
wxID:下单微信ID
orderJine:下单金额
period:下单期数

---

数据库包括两个部分
客人数据库
订单开奖

商品数据库
商品加开奖情况

git add *
git commit -m "17-05-12"
git push -u origin master

---
### 功能点实现
1. 通讯,访问服务器
2. 实现服务器读写数据库
3. 支付流程打通






# README-TWICE.MD
## PATH
H:\wafer-node-server-demo-master\wafer-node-server-demo-master
---

17-05-07
无法访问小程序腾讯云端
已经申请工单，等候回复
工单内容如下：
---
### client 端登陆操作报错
登录失败 LoginError {type: "ERR_LOGIN_FAILED", message: "登录失败，可能是网络错误或者服务器发生异常"}message: "登录失败，可能是网络错误或者服务器发生异常"stack: (...)type: "ERR_LOGIN_FAILED"__proto__: Error
    at http://1932019330.appservice.open.weixin.qq.com/vendor/qcloud-weapp-client-sdk/lib/login.js:18:28
    at http://1932019330.appservice.open.weixin.qq.com/vendor/qcloud-weapp-client-sdk/lib/login.js:22:2
    at require (http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17824)
    at http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17573
    at http://1932019330.appservice.open.weixin.qq.com/vendor/qcloud-weapp-client-sdk/index.js:4:13
    at require (http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17824)
    at http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17573
    at http://1932019330.appservice.open.weixin.qq.com/app.js:7:14
    at require (http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17824)
    at http://1932019330.appservice.open.weixin.qq.com/app.js:19:4
---
### server端
无法访问此网站

70139330.qcloud.la 拒绝了我们的连接请求。
请在 Google 中搜索“70139330 qcloud 5757”
---
### ip访问ok
118.19.184.71::5757

	
100000613970 : 2017-05-07 11:46:11
---
### 背景介绍
1 我使用一站式配置，可以运行；
2 会话 业务服务器重装系统，镜像配置 NODESDK镜像  会话 镜像 ，无法工作；
3 持续到现在仍然无法工作；

腾讯云微信小程序服务端 Demo - Node.js

会话管理服务

登录服务
检查登录
信道服务

获得信道地址
---
打扰了
不知道如何修改问题

---
### 运行app.js
找到并重启当前项目的指令语句
> 执行该语句
ps -aux |grep app|awk -e '{print "kill -9 " $2}' |sh
> 打印该语句
ps -aux |grep app|awk -e '{print "kill -9 " $2}' 
> 运行
node app.js
pm2 restart process.js
---
### 17-05-08
1. 无法打开proxy 禁止注册表修改
2. regedit禁止proxy
3. 账号密码查看工单
100000613970
pw2364839934

118.89.161.71 业务服务器
118.89.161.138 会话服务器

> 本目录与小程序客户端上传版本一致

4. 界面入口介绍

```
graph LR
入口-->界面
界面-->功能
功能-->服务
```
index界面|完成情况|介绍
---|---|---
小安安客服|完成|进入chat
使用位置服务|完成|进入map
清除位置服务|完成|清除session
报平安|完成|doRequest函数
开启关闭关爱服务|完成|调用switchTunnel函数
一元购|完成|界面yydb,增加resources文件夹
关于我们|与蒲江圆觉寺合作,捐赠打赏功能|?weapp 支付

item|content
---|---|---
AppID(小程序ID)|wx56df671c2e5c8bb7
AppSecret(小程序密钥)|9974370ad5523d55568059609a8ed9fa

#### 搜集的问题
1. wx.request qcloud.request有什么区别?
2. => js语言 
    (x) => x + 6 
	
	function(x){
		return x + 6;
	}
3. ERR_NAME_NOT_RESOLVED
	关闭开发工具,设置-不适用任何代理-重启;
	asdebug.js:1 POST https://70139330.qcloud.la/ net::ERR_NAME_NOT_RESOLVED
	域名无法解析
	
---
##  服务器DNS解析问题始终没解决

使用ssh自动上传代码
eval `ssh-agent -s`
ssh-add ~/.ssh/ls
	
---
# 17-05-09	
netstat -a|grep 80

将 qcloud_appid 1253682516
修改为 qcloud_appid 70139330

# 17-05-09 appsecret 密码!! important
3d244230f537e0eb2e649f4cf0b2d14f

cdb ip 地址
10.66.231.15

---
# 8:17 2017/5/18 
buglist
1. 修改删除位置错误,删除0,而不是当前点击index ok
2. 设置下注金额 ok
3. 保存本地数据,退出进入后,下单历史,购物车仍然显示 test
4. 数据库读写 (下单信息, 产品期数, 期数挂钩)
5. 订单流程完整一次
6. 用户登陆信息管理
7. 准备产品
---
# 8:49 2017/5/19
1. 微信登陆实现;
2. 数据库归集
3. 思路,分表,生成数据
/**
 * 数据库: ananfu 数据库 /data/db
 *   表格: buyhistory 下单历史 openid 主key
 *   表格: goodsList 商品名录 perioud 主key
 *   表格: loadrate 进度表格 peroud 主key
 **/

/**
 * 数据库数据格式
 * 表格1 业务表格:
 *  period: 211116272 期数
 *  goods:
 * 	  buyUnit 最小投注单位
 * 	  desc 产品描述
 * 	  id 期数,产品标示?
 * 	  imgUrl 图片位置 png 格式
 *  takerate: 0.01, 投注进度
 *  takechances: 70, 当前投注金额
 *  totalchances: 8090,  总投注金额
 *  winner: "铁木真" 得主
 *  datestart:开售时间
 *  dateend:开奖时间
 *
 * 表格2 订单表格:
 *  period: 211116272 期数
 *  order: 订单号{}
 *    orderNum:订单号
 *    orderTime:下单时间
 *    wxID:下单微信ID
 *    orderJine:下单金额
 *    period:下单期数,...等其他订单信息
 *
 ***/
 
---
# 22:13 2017/5/21
1. 数据同步
由数据库进行同步
mongoimport -h localhost --port 27017 -d ananfu -c goodsList -f BUYUNITS,DESC,IMGURL,IMGURL2,IMGURL3,IMGURL4,NAME,TAG,PERIOD,TAKERATE,TAKECHANCES,TOTALCHANCES,WINNER --ignoreBlanks --file /data/release/node-weapp-demo/goodsList.csv --type csv --headerline --uperset

---
# 14:40 2017/5/24
一定要使用 setData 设置参数
同步购买历史数据
buyhistory 入库

放图
手机充值卡
http://img.hb.aicdn.com/cc60479c93ef85546cf3d91c85564af9f3ac1319395abc-Y6JvIr_fw658
http://img.hb.aicdn.com/9bbbcb0762797b1979548b774363d83973a9e77f13e2df-47JCF8_fw658
http://img.hb.aicdn.com/b605945fcab1f0d4b7c73913b1a4b6e2e9d7f5fe29220-abns54_fw658
http://img.hb.aicdn.com/eab754b3270f2a357dc459521cb779dcd1482e84976e-IBE8Od_fw658

---
# 10:43 2017/5/25
1. 完成登录用户资料存取
    以为openid为唯一标签
2. 
抬头位置图片内容:

1 一元夺宝招牌
2 公平公正公开透明宣传图语
3 商品宣传图片
4 中奖分享,宣传图片
5 卖点宣传
  .1 全过程透明
  .2 即时开奖,通知中奖结果
  .3 开奖条件不满足,3个工作日内退款
  .4 微信号公开,确保开奖真实
  .5 所有奖品从京东采购,物流品质有保障

---
# 14:04 2017/5/26  
7559016582106210422085153
招商银行深圳分行高新园支行
