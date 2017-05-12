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
　　一元夺宝是同花顺（300033）推出的全新平台业务，旨在增加用户购买付费商品的趣味性。每个用户只需1元就有机会获得心仪的产品。
　　2、 　怎样参加一元夺宝？
　　用户登录或者注册同花顺账号，就可以参加一元夺宝了。
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
　　若某件商品的夺宝号码从开始分配之日起90天未分配完毕，则同花顺公司有权取消该件商品的夺宝活动，并向用户退还夺宝币，所退还夺宝币将在3个工作日内退还至用户账户中。

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
	
### 微信小程序图片自适应









