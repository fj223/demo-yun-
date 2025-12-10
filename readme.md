# 代码链接合集

一个移动端友好的单页应用，整合9个不同的代码链接，用户可以通过一个入口链接在微信中访问所有功能。

## 🚀 功能特点

- 📱 **移动端优化** - 专为手机和微信内置浏览器优化
- 🔗 **一个入口** - 通过一个链接访问所有代码功能
- 🏠 **便捷导航** - 每个子页面都有返回主页功能
- ⚡ **快速加载** - 静态页面，加载速度快
- 🎨 **现代化设计** - 使用TailwindCSS，界面美观

## 📋 包含的代码链接

1. 🐕 [小狗代码](https://n.dglls.cn/xiaogou/) - 可爱的小狗动画效果
2. 🎮 [打瓦代码](https://n.dglls.cn/dawa/) - 有趣的打瓦游戏
3. 👶 [儿子代码](https://n.dglls.cn/erzidaima/) - 温馨的儿子互动页面
4. 🤝 [和好代码](https://n.dglls.cn/hehao/) - 温馨的和解页面
5. 💕 [恋人代码](https://n.dglls.cn/lianr/) - 浪漫的恋人页面
6. 👩 [妈妈代码](https://n.dglls.cn/mama/) - 温暖的妈妈页面
7. 💖 [满屏爱心代码](https://n.dglls.cn/mpaixin/) - 浪漫的爱心动画
8. 🧋 [请喝奶茶代码](https://n.dglls.cn/naicha/) - 可爱的奶茶邀请页面
9. 📝 [问卷调查代码](https://n.dglls.cn/wenjuan/) - 有趣的问卷页面

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: TailwindCSS
- **路由**: React Router DOM
- **部署**: 支持Vercel、Netlify等静态托管

## 📦 安装和运行

```bash
# 安装依赖
npm install

# 开发环境
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 🚀 部署

### Vercel部署

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

### 静态托管

构建后的文件在`dist/`目录中，可以部署到任何静态文件托管服务。

## 📱 微信适配

- ✅ 优化微信内置浏览器体验
- ✅ 防止地址栏遮挡内容
- ✅ 触摸事件优化
- ✅ 分享标题和描述优化

## 🔧 自定义

要添加新的代码链接，编辑 `src/data/links.ts` 文件：

```typescript
{
  id: 'your-link-id',
  title: '你的标题',
  description: '简短描述',
  icon: '🎯',
  url: 'https://your-link.com/',
  route: '/your-route'
}
```

## 📄 许可证

MIT License