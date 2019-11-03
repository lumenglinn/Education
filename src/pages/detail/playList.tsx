import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'


export default class PalyList extends Component {
    static defaultProps = {
        onAdd: () => { }
    }

    handleBuy = () => {
        Taro.showToast({
            title: '暂时只支持加入购物车',
            icon: 'none'
        })
    }

    render() {
        return (
            <View className="detail-palyList">
                <View className="title">节目列表(6)</View>
                <View className="play-list">
                    {
                        [1,2,3,4,4,5,5,6,7,7,8,,9].map(() => {
                            return <View className="play-item">
                            <View className="article-title">善良的死神 001 青梅竹马</View>
                            <View className="play-datail">
                                <View className="time">
                                    <AtIcon value='clock' size='12' color='#7f7f7f'></AtIcon>
                                    <Text> 15分19秒</Text>
                                </View>
                                <View className="count">
                                    <AtIcon value='play' size='12' color='#7f7f7f'></AtIcon>
                                    <Text> 175.2万</Text>
                                </View>
                                <View className="date">
                                    <AtIcon value='upload' size='12' color='#7f7f7f'></AtIcon>
                                    <Text> 2019-01-01</Text>
                                </View>
                            </View>
                        </View>
                        })
                    }
                    
                </View>
                {/* {NAV_LIST.map(item => (
                    <View
                        key={item.key}
                        className='nav-icon'
                        onClick={this.handleNav.bind(this, item)}
                    >
                        <Image
                            className='nav-icon-img'
                            src={item.img}
                        />
                    </View>
                ))}
                <View className='nav-cart'>加入购物车</View>
                <View className='nav-buy' onClick={this.handleBuy}>立即购买</View>
                 */}
            </View>
        )
    }
}