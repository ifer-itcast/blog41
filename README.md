# blog41

## Session 持久化

- connect-mongo

## 首页登录/退出判断

```html
{{if username}}
	<a href="/admin/logout">退出</a>
{{else}}
	<a href="/admin/login">登录</a>
{{/if}}
```

```javascript
// 修改登录拦截代码
let notEntry = ['/user', '/user-edit', '/article', '/article-edit'];
if(req.session.role === 'normal' && notEntry.includes(req.url)) {
    return res.redirect('/home');
}
```

## 警告去除


## 其他优化
