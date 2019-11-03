import { View, Image, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

export default function Introduce() {
  const { data } = this.props;
  return (
    <View className='detail-introduce'>
      <View className="detail">
        <Image
          className='detail-img'
          src="https://pic.qingting.fm/2017/0828/20170828150728678.jpg!400"
        />
        <View className="detail-desc">唐家三少成名之作，不容错过的经典！血雨撒世，千年劫难即将降临，谁是拯救大陆的救世主？小偷出身的阿呆，在一次行窃之时，被强大的炼金术士因为某种目的带走，阿呆的命运从此发生天翻地覆的变化……</View>
      </View>
      <View className="button-group">
        <AtButton type='primary' className="ebutton left" size='normal'>分享好友</AtButton>
        <AtButton type='primary' className="ebutton" size='normal'>收藏一下</AtButton>
      </View>
    </View>
  )
}
