<template>
  <div class="about ">
    <div class="host-introduce layout-width">
      <img :src="require('./../../assets/images/introduce.png')" />
      <div class="hi-content">
        <h3>
          HOSPITAL INTRODUCTIO
        </h3>
        <h2>
          中心简介
        </h2>
        <p>
          重庆市肿瘤医院/重庆大学附属肿瘤医院药物临床试验机构于2008年通过CFDA资格认定，2014年、2017年先后两次通过机构资格复核认定，发展至今已有10年历史。机构于2017年开始筹建I期临床试验中心，以临床药代动力学、药物制剂生物利用度及生物等效性评价研究、药物的体内外代谢研究等为主要方向，力求成为一个集医疗教学科研于一体的综合性研究中心。
        </p>
      </div>
    </div>
    <div class="hardware layout-width">
      <div class="title">
        <h3>HOSPITAL INTRODUCTIO</h3>
        <h2>硬件条件</h2>
      </div>
      <p>I期临床试验中心位于医院内科医技楼22楼（顶层），2018年7月开始正式投入使用，建筑面积约 1000 m2，设临床试验观察床50张（其中设有肿瘤药物项目专用床位），抢救床1张，配有除颤仪、监护仪、吸引器、心电图机等完善的医疗抢救设施，并与ICU建立了绿色通道，能确保受试者的安全和临床试验的顺利进行。
      </p>
      <p>除观察病房外，研究中心还配备知情室、受试者筛查区、娱乐与活动区、护士站、医生办公室、I期试验药房、药物准备室、样本处理及保存室、资料室、监察室等。配备有先进专业的仪器设备，24h温湿度中央监控报警系统、超低温冰箱、医用低温保存箱、 药品阴凉箱、Eppendorf高速冷冻离心机、GPS卫星同步时钟系统等。整个研究中心实现WiFi全面覆盖，为受试者提供了舒适的娱乐环境。</p>
      <div class="imglist">
        <img :src="require('./../../assets/images/ab_hard.png')" />
        <img :src="require('./../../assets/images/ab_hard1.png')" />
        <img :src="require('./../../assets/images/ab_hard2.png')" />
      </div>
    </div>
    <div class="rearchteam layout-width">
      <div class="team-info">
        <div class="title">
          <h3>HOSPITAL INTRODUCTIO</h3>
          <h2>研究团队</h2>
        </div>
        <p>重庆市肿瘤医院/重庆大学附属肿瘤医院药物临床试验机构于2008年通过CFDA资格认定，2014年、2017年先后两次通过机构资格复核认定，发展至今已有10年历史。机构于2017年开始筹建I期临床试验中心，以临床药代动力学、药物制剂生物利用度及生物等效性评价研究、药物的体内外代谢研究等为主要方向，力求成为一个集医疗教学科研于一体的综合性研究中心。</p>
      </div>
      <img :src="require('./../../assets/images/ab_team.png')" />

    </div>
    <div class="advantage layout-width">
      <div class="title">
        <h3>HOSPITAL INTRODUCTIO</h3>
        <h2>我们的优势</h2>
      </div>
      <div class="info-list">
        <div class="info-content">
          <h3>硬件优势</h3>
          <p>I期临床试验中心共有50张床位，进行封闭式管理，配备专职的医护人员，具有全套监控和抢救设备。有可溯源的HIS、LIS等系统，加入了受试者联网查重系统，能够更有效地筛选符合入排标准的临床试验受试者。</p>
        </div>
        <img :src="require('./../../assets/images/advantage2.png')" />
        <div class="info-content">
          <h3>硬件优势</h3>
          <p>I期临床试验中心共有50张床位，进行封闭式管理，配备专职的医护人员，具有全套监控和抢救设备。有可溯源的HIS、LIS等系统，加入了受试者联网查重系统，能够更有效地筛选符合入排标准的临床试验受试者。</p>
        </div>
        <img :src="require('./../../assets/images/advantage1.png')" />
        <div class="info-content">
          <h3>硬件优势</h3>
          <p>I期临床试验中心共有50张床位，进行封闭式管理，配备专职的医护人员，具有全套监控和抢救设备。有可溯源的HIS、LIS等系统，加入了受试者联网查重系统，能够更有效地筛选符合入排标准的临床试验受试者。</p>
        </div>
        <img :src="require('./../../assets/images/advantage3.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about{
  background-color: #f5f5f5;
  padding-top: 50px;
  .host-introduce{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    img{
      width:686px;
      height:325px;
    }
    .hi-content{
      width:516px;
      height:269px;
      background:$colorTitle;
      padding: 28px 60px;
      h3{
        font-size:24px;
        font-weight:500;
        color:#969696;
        line-height:33px;
      }
      h2{
        font-size:30px;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:42px;
        margin-top: 5px;
        margin-bottom: 15px;
      }
      p{
        font-size:14px;
        font-weight:400;
        color:#bababa;
        line-height:28px;
        text-align: justify;
        text-indent: 28px;
      }
    }
  }
  .hardware{
    margin-bottom: 50px;
    p{
      font-size:14px;
      font-weight:400;
      color:rgba(74,74,74,1);
      line-height:28px;
      text-align: justify;
      text-indent: 28px;
    }
    .imglist{
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      img{
        width:380px;
        height:219px;
      }
    }
  }
  .title{
    h3{
      font-size:24px;
      font-weight:500;
      color:rgba(61,198,197,1);
      line-height:33px;
    }
    h2{
      font-size:30px;
      font-weight:500;
      color:rgba(54,174,173,1);
      line-height:42px;
      margin-bottom: 10px;
    }
  }
  .rearchteam{
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    p{
      width: 568px;
      text-align: justify;
      text-indent: 28px;
      font-size:14px;
      font-weight:400;
      color:rgba(74,74,74,1);
      line-height:28px;
    }
  }
  .advantage{
    padding-bottom: 50px;
    .info-list{
      display: flex;
      flex-wrap: wrap;
      img{
        width:400px;
        height:217px;
      }
      .info-content{
        width:300px;
        height:177px;
        padding: 20px 50px;
        font-size:18px;
        font-weight:400;
        background-color: rgba(74,74,74,1);
        color:rgba(255,255,255,1);
        line-height:28px;
        h3{
          font-size:24px;
        }
        p{
          margin-top: 15px;
          font-size:14px;
          font-weight:400;
          color:#bababa;
          line-height:28px;
          text-align: justify;
          text-indent: 28px;
        }
      }
    }
  }
}
</style>
