import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, ScrollView } from '@tarojs/components'
import ListItem from './listItem'
import './index.scss'
const backgroundAudioManager = Taro.getBackgroundAudioManager()

@connect(({ index }) => ({
  ...index,
}))
export default class Index extends Component {

  state = {
    searchValue: '',
    pageNo: 1,
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
    backgroundAudioManager.pause()
    // this.setState({
    //   isPlaying: false
    // })
  }

  playMusic() {
    backgroundAudioManager.title = '网易音乐'
    backgroundAudioManager.coverImgUrl = 'http://p3.music.126.net/F-jS8NF3bLRzUZe18iJsrA==/109951164448921992.jpg'
    backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=476592630.mp3'
    backgroundAudioManager.play()
    // this.setState({
    //   isPlaying: true
    // })
  }


  render() {

    return (
      <View className='index-page'>
        111
        <View onClick={this.playMusic}>播放</View>
        <View onClick={this.pauseMusic}>暂停</View>
      </View>
    )
  }
}
