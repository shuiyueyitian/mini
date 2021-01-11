import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import './index.less';

export default class Index extends Component {
    componentWillMount () { }

    componentDidMount () { 
  
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }
    abc () {
    
    }

config = {
    navigationBarTitleText: '首页'
}

render () {
    let a = 3;

    return (
        <View className='index'>
            <View className='test'>Hello world</View>
        </View>
    );
}
}
