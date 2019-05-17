import Mock from 'mockjs';
let Random = Mock.Random

// 扩展方法
Random.extend({
    filmtype: function (date) {
        var filmTypes = [
            '喜剧',
            '悲剧',
            '爱情',
            '动作',
            '枪战',
            '犯罪',
            '惊悚',
            '恐怖',
            '悬疑',
            '动画',
            '家庭',
            '奇幻',
            '魔幻',
            '科幻',
            '战争',
            '青春'
        ]
        return this.pick(filmTypes)
    }
})

var template = {
    'film|10': [
        {
            'id|+1': 1,
            name: '@CTITLE',
            title: '@CTITLE',
            type: '@FILMTYPE',
            hot: '@BOOLEAN',
            image: '@IMAGE'
        }
    ]
}

var data = Mock.mock(template)

export { data }
