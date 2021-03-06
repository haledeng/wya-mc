## Cell 单元格

### API

#### options的具体参数
| 参数       | 说明                                       | 类型             | 默认值          | 可选值                                      |
| -------- | ---------------------------------------- | -------------- | ------------ | ---------------------------------------- |
| title    | 标题                                       | String         | -            |                                          |
| value    | 详细信息                                     | String         | -            |                                          |
| label    | 标题下方的附加描述                                | String         | -            |                                          |
| isLink   | 是否可跳转，默认显示右箭头，                           | Boolean/String | -            |                                          |
| linkType | 链接类型                                     | String         | `navigateTo` | `navigateTo` `redirectTo` `switchTab` `reLaunch` |
| url      | 跳转路由，要带上isLink才起作用                       | String         | -            |                                          |
| extra    | 右箭头左侧文字，搭配isLink使用，单独使用无效                | String         | -            |                                          |
| classes  | 外部传入的类名                                  | String         | -            |                                          |
| styles   | 外部传入的行内样式                                | String         | -            |                                          |
| slot     | 插槽，不传name插入最右侧，name=‘left’插入标题左侧、name=‘right’插入标题右侧 | 节点             |              | name='left'/'right'                      |

#### 方法

| 方法名  | 参数   | 返回值  | 介绍   |
| ---- | ---- | ---- | ---- |
| -    | -    | --   | -    |

### 使用指南
在`.json`文件中引入组件
```json
{
  "usingComponents": {
    "cell": "path/to/the/custom/component"
  }
}
```
在`.wxml`文件中使用组件

```html
<view class="g-m-t-10">
    <notes>显示箭头和额外文字，可跳转到其他页面</notes>
    <cell 
		title="我是标题" 
		is-link
        extra="查看更多"
        url="/pages/index/index"
	></cell>
</view>
```

