import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View , ScrollView } from '@tarojs/components'
import Introduce from './introduce'
import PlayList from './playList'
import './index.scss'

@connect(({ detail }) => ({
  ...detail,
}))
export default class Detail extends Component {
  config: Config = {
    navigationBarTitleText: '产品详情'
  }

  componentWillMount() { }

  componentDidMount() { 
    const { id } = this.$router.params;
    const { dispatch } = this.props;
    dispatch({
      type: 'detail/getProductDetail',
      payload: {
        id
      }
    });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { proDetail } = this.props;
    // const { bannerUrl, detail } = proDetail;
    return (
      <View className='detail-page'>
        <Introduce />
        {/* <ScrollView
          scrollY
          scrollWithAnimation
          lowerThreshold={50}
          style={`height: 667px;`}
          onScrollToLower={() => {console.log(111)}}
        > */}
          <PlayList />
        {/* </ScrollView> */}
        
      </View>
    )
  }
}
