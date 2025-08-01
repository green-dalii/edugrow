import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: "https://edugrow.cn/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    mermaid({
      theme: 'base',
      autoTheme: true,
      mermaidConfig: {
        // 全局主题变量设置
        themeVariables: {
          // 通用颜色设置
          background: '#b8e6e3',
          textColor: '#00151a',
          titleColor: '#00151a',
          // 饼图设置
          pie1: '#00ffc3',
          pie3: '#00baaa',
          pie4: '#2b535e',
          pie7: '#1e9659',
          pieOuterStrokeWidth: '0px',
          pieStrokeWidth: '0px',
          pieTitleTextSize: '16px',
          pieLegendTextSize: '12px',
          // XY图表设置
          xyChart: {
            titleColor: '#00151a',
            xAxisLabelColor: '#00151a',
            xAxisTitleColor: '#00151a',
            yAxisLabelColor: '#00151a',
            yAxisTitleColor: '#00151a',
            plotColorPalette: '#00beac,#0097b3,#006072,#008c7f,#00a99d,#007a8c'
          }
        }
      }
    }),
    // 使用Partytown将第三方脚本移至Web Worker
    partytown({
      // 配置Partytown以优化第三方脚本
      config: {
        forward: ["dataLayer.push"], // 如果使用GA等分析工具
      },
    }),
    // 压缩集成
    playformCompress(),
  ],
  // 优化构建设置
  build: {
    // 启用CSS代码分割
    inlineStylesheets: "auto",
  },
  // 优化图像处理
  image: {
    // 设置默认图像服务质量
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        quality: 80, // 降低默认质量以提高性能
      },
    },
  },
  // 优化Vite配置
  vite: {
    build: {
      // 启用CSS代码分割
      cssCodeSplit: true,
      // 减小chunk大小
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // 优化输出的chunk
          manualChunks: {
            // 将大型依赖项分离为单独的chunk
            vendor: [
              "@fontsource-variable/inter",
              "@fontsource-variable/outfit",
            ],
          },
        },
      },
    },
    // 优化CSS处理
    css: {
      // 启用CSS模块
      modules: {
        // 生成更短的类名
        generateScopedName: "[hash:base64:5]",
      },
    },
    // 启用预压缩
    plugins: [],
  },
});