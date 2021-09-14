# 项目介绍

使用vue 3 + vuex + vue-router + scss，用vite 2.0打包 ，并用firebase当做数据库，构造一个博客的响应式前端页面。

> firebase 为谷歌提供的服务，需要代理才能正常使用



目前：已经实现注册登录，新增，预览，修改，删除博客，添加管理员等等功能。

TODO：

- [ ] 实现加载时的骨架屏
- [ ] 增加评论功能

## 未登录页面

### 电脑端

未注册登录时，navigation栏会显示注册登录，且第一个大的banner提示注册登录。

<img src="https://i.loli.net/2021/09/14/73PMKbNReGnhjit.png" alt="image-20210913235458784" style="zoom:80%;" />



之后还会显示2个具体的文章的大banner，点击可以查看，最后为博客卡片和页面底部信息。



![image-20210913235827576](https://i.loli.net/2021/09/14/8EoSTgOpejhYzfL.png)

### 手机端

<img src="https://i.loli.net/2021/09/14/QJPH3Bwq9xaINYR.png" alt="image-20210914090402471" style="zoom:50%;" />

<img src="https://i.loli.net/2021/09/14/iMN6ZnkFyrYG1jz.png" alt="image-20210914090416735" style="zoom:50%;" />



## 注册登录

**由于使用firebase作为后端，因此已经实现注册登录，重置密码功能。**

### 电脑端

#### 注册


![image-20210914090602710](https://i.loli.net/2021/09/14/CnZHSxsY7DmXUlM.png)

#### 登录

![image-20210914090524872](https://i.loli.net/2021/09/14/ZQlCvBqeuV5xcgW.png)

![image-20210914091113310](https://i.loli.net/2021/09/14/pujCsDihBKmP5kx.png)

#### 重置密码

![image-20210914091005510](https://i.loli.net/2021/09/14/yNUTz52PW96LJhS.png)


### 手机端

#### 注册

<img src="https://i.loli.net/2021/09/14/7otqQ5SGvOPweEr.png" alt="image-20210914090630307" style="zoom:50%;" />

#### 登录

<img src="https://i.loli.net/2021/09/14/NWz1tiVclHJOrq9.png" alt="image-20210914090658940" style="zoom:50%;" />



#### 重置密码

<img src="https://i.loli.net/2021/09/14/7mNpq5TLEaX8Ur6.png" alt="image-20210914090717549" style="zoom:50%;" />



## 已经登录

电脑端左侧会显示由用户昵称构成的头像；如果用户注册时申请为管理员，此时导航栏上会有还会新增发布文章功能。

第一个提示用户登录的大banner已经消失，取而代之的是博客。

![image-20210914091146796](https://i.loli.net/2021/09/14/Zq4JNlvIeMyEKcT.png)

### 用户信息修改

单击用户头像，可以看到一个弹出的modal。

![image-20210914091508892](https://i.loli.net/2021/09/14/SaMAu1PsXLkDv2t.png)

- 账号设置: 修改用户姓名和用户名

  ![image-20210914091704376](https://i.loli.net/2021/09/14/mXfojcexA4aQT15.png)

- 管理员主页：

  如果登录的用户是管理员，可以通过邮箱将其他的已经注册的用户设置为管理员。

  ![image-20210914091822200](https://i.loli.net/2021/09/14/oVkl5KGbB3ZjCvY.png)

- 退出登录



### 发布文章

只有登录的用户是管理员，才有这个功能。

![image-20210914092354462](https://i.loli.net/2021/09/14/HwA4EngKNlqeWct.png)

可以上传封面，预览封面和发布前预览文章。



### 修改删除文章

如果用户是管理员，还可以在博客页面，修改和删除文章。

![image-20210914092457904](https://i.loli.net/2021/09/14/kOxj9KCZUrotfHY.png)

![image-20210914092613600](https://i.loli.net/2021/09/14/z9PkiIXoS42LBbY.png)





最后，fireblogs使用vue-router 实现了导航守卫，如果用户没有登录，是无法进入到需要权限的页面。

