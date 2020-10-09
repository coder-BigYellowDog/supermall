
// 配置常用路径
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // @ == src
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}