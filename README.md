## 环境变量配置

本项目使用 dotenv 来管理环境变量。请按照以下步骤配置环境变量：

1. 复制 `.env.example` 文件并重命名为 `.env`
2. 根据需要修改 `.env` 文件中的值

### 可用的环境变量

- `VITE_APP_TITLE`: 应用标题
- `VITE_API_URL`: API 服务器地址
- `VITE_DEBUG_MODE`: 调试模式开关

### 在代码中使用环境变量

在 Vite 项目中，可以通过 `import.meta.env` 访问环境变量：

```tsx
// 示例：访问环境变量
const isDebug = import.meta.env.VITE_DEBUG_MODE;
```

注意：只有以 `VITE_` 开头的环境变量才会被暴露给客户端代码。
