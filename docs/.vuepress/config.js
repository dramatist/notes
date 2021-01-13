module.exports = {
    title: 'Notes', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Process to be top Javaer', // meta 中的描述文字，用于SEO
    port: 8899,
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],  //浏览器的标签栏的网页图标
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/favicon.png',
        nextLinks: false,
        prevLinks: false,
        nav: [
            { text: 'Guide Reference', link: '/overview/overview.md' },
            { text: 'Github', link: 'https://github.com/dramatist' },
        ],
        sidebar: [
            {
                title: '综述',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/overview/overview.md', 'Overview']
                ]
            },
            {
                title: 'Basic', 
                collapsable: false,
                children: [
                    ['/basic/primitive.md', '基本数据类型'],
                    ['/basic/operator.md', '运算符'],
                    ['/basic/class.md', '类与接口'],
                    ['/basic/exception.md', '异常'],
                    ['/basic/string.md', 'String'],
                    ['/basic/generic.md', '泛型'],
                    ['/basic/stream.md', 'Stream'],
                    ['/basic/annotation.md', '注解'],
                    ['/basic/serializable.md', '序列化'],
                    ['/basic/enum.md', '枚举'],
                    ['/basic/reflect.md', '反射'],
                    ['/basic/object.md', 'Object'],
                    ['/basic/spi.md', 'SPI'],
                    ['/basic/reference.md', '引用'],
                    ['/basic/codec.md', '编码'],
                    ['/basic/regex.md', '正则表达式']
                ]
            },
            {
                title: '虚拟机',
                collapsable: false,
                children: [
                    ['/vm/memory.md', '内存划分'],
                    ['/vm/object.md', '对象']
                ]
            },
            {
                title: '工具',
                collapsable: false,
                children: [
                    ['/util/git.md', 'Git'],
                    ['/util/maven.md', 'Maven'],
                    ['/util/gradle.md', 'Gradle']
                ]
            }

        ]
    }
}
