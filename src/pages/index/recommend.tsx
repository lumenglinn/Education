import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  }

  handleClick(id) {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    })
  }

  render() {
    const { data } = this.props;
    return (
      <View className='recommend'>
        {
          data && data.map((item, i) => {
            return <View className='recommend-item' key={`mode${i}`} onClick={this.handleClick.bind(this, item.id)}>
              <View className='recommend-title'>小说
              {/* <Image
                  className='more-icon'
                  src='https://sss.qingting.fm/v2/images/ic_btn_back.png'
                /> */}
              </View>
              <View className="mode-list">
                <View className="mode-item">
                  <Image
                    className='mode-img'
                    src="https://pic.qingting.fm/2017/0828/20170828150728678.jpg!400"
                  />
                  <View className="mode-name">张作霖手黑写错了？寸土不让！张作霖手黑写错了？寸土不让！</View>
                </View>
                <View className="mode-item">
                  <Image
                    className='mode-img'
                    src="https://pic.qingting.fm/2017/0828/20170828150728678.jpg!400"
                  />
                  <View className="mode-name">张作霖手黑写错了？寸土不让！张作霖手黑写错了？寸土不让！</View>
                </View>
                <View className="mode-item">
                  <Image
                    className='mode-img'
                    src="https://pic.qingting.fm/2017/0828/20170828150728678.jpg!400"
                  />
                  <View className="mode-name">张作霖手黑写错了？寸土不让！张作霖手黑写错了？寸土不让！</View>
                </View>
              </View>
            </View>
          })
        }
      </View>
    )
  }
}