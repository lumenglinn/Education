import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { AtButton, AtIcon } from 'taro-ui'
import { View, Image } from '@tarojs/components'
import './index.scss'
const backgroundAudioManager = Taro.getBackgroundAudioManager()

// @connect(({ index }) => ({
//   ...index,
// }))
export default class Index extends Component {
  state = {
    isPlaying: false
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() {
    Taro.setNavigationBarColor({
      frontColor: '#ffffff'
      backgroundColor: '#333333'
    }).then(() => {
      console.log('设置成功！')
    })
    // this.getList();

    // Taro.getBackgroundAudioPlayerState({
    //   success(res) {
    //     if (res.status !== 2) {
    //       that.setState({
    //         isPlaying: true,
    //       })
    //       timer = setInterval(() =>{
    //         that.setState({
    //             currentyTime: backgroundAudioManager.currentTime
    //           })
    //           that.updateLrc(backgroundAudioManager.currentTime)
    //           that.updateProgress(backgroundAudioManager.currentTime)
    //         }, 300)
    //     }
    //   }
    // })
    // this.playMusic()
    // Taro.playBackgroundAudio({
    //   dataUrl: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',
    //   title: '网易音乐',
    //   coverImgUrl: 'http://p3.music.126.net/F-jS8NF3bLRzUZe18iJsrA==/109951164448921992.jpg'
    // })

    // backgroundAudioManager.onPause(() => {
    //   this.onPause()
    // })


  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  pauseMusic() {
    backgroundAudioManager.pause();
  }

  playMusic() {
    backgroundAudioManager.title = '网易音乐'
    backgroundAudioManager.coverImgUrl = 'http://p3.music.126.net/F-jS8NF3bLRzUZe18iJsrA==/109951164448921992.jpg'
    backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=476592630.mp3'
    backgroundAudioManager.play()
  }

  handleMusic() {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
    this.setState({
      isPlaying: !isPlaying
    })
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <View className='program-page'>
        <Image
          className='pro-img'
          src="https://pic.qingting.fm/channel/2019/10/16/c887b4b66c77d25204c289104c2649c6.jpg!400"
        />
        <View className="progress"></View>
        <View className="pro-title">乱世枭雄 第一回</View>
        {/* <View className="pro-detail"> */}
        <View className="button-group">
          <AtIcon value='prev' size='24' color='#fff'></AtIcon>
          <View className="play-pause" onClick={this.handleMusic}>
            {
              isPlaying ? <AtIcon value='pause' size='26' color='#fff'></AtIcon>
                        : <AtIcon value='play' size='30' className="btn-play" color='#fff'></AtIcon>
            }
            
          </View>
          <AtIcon value='next' size='24' color='#fff'></AtIcon>
        </View>
        {/* <View onClick={this.playMusic}>播放</View> */}
        <AtButton type='primary' openType="share" className="btn-share" size='normal'>分享好友</AtButton>
      </View>
    )
  }
}
