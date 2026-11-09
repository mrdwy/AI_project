import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  lang: "zh-CN",
  title: "AI 时代嵌入式开发教程",
  description: "给 AI 长出手脚——后 AI 时代的嵌入式调试思考与实践",
  base: "/AI_project/",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["meta", { name: "theme-color", content: "#3c82f6" }],
  ],

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "导读", link: "/文章/01-工欲善其事必先利其器" },
      { text: "教学大纲", link: "/教学大纲" },
      {
        text: "讲义",
        items: [
          { text: "第 0 章 · 导学", link: "/讲义/第0章-导学" },
          { text: "第 1 章 · 环境搭建", link: "/讲义/第1章-环境搭建" },
          { text: "第 2 章 · 从 C 到寄存器", link: "/讲义/第2章-从C到寄存器" },
          { text: "第 3 章 · 用 AI 写代码", link: "/讲义/第3章-用AI写代码" },
          { text: "第 4 章 · 工程框架与迭代", link: "/讲义/第4章-工程框架与迭代" },
          { text: "第 5 章 · 调试实战", link: "/讲义/第5章-调试实战" },
          { text: "第 6 章 · 电赛与智能车收束", link: "/讲义/第6章-电赛与智能车收束" },
        ],
      },
      { text: "GitHub", link: "https://github.com/mrdwy/AI_project" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "导读 · 工欲善其事必先利其器", link: "/文章/01-工欲善其事必先利其器" },
          { text: "教学大纲", link: "/教学大纲" },
        ],
      },
      {
        text: "讲义",
        items: [
          { text: "第 0 章 · 导学", link: "/讲义/第0章-导学" },
          { text: "第 1 章 · 环境搭建", link: "/讲义/第1章-环境搭建" },
          { text: "第 2 章 · 从 C 到寄存器", link: "/讲义/第2章-从C到寄存器" },
          { text: "第 3 章 · 用 AI 写代码", link: "/讲义/第3章-用AI写代码" },
          { text: "第 4 章 · 工程框架与迭代", link: "/讲义/第4章-工程框架与迭代" },
          { text: "第 5 章 · 调试实战", link: "/讲义/第5章-调试实战" },
          { text: "第 6 章 · 电赛与智能车收束", link: "/讲义/第6章-电赛与智能车收束" },
        ],
      },
    ],

    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    search: { provider: "local", options: { locales: { root: { translations: { button: { buttonText: "搜索" } } } } } },

    socialLinks: [
      { icon: "github", link: "https://github.com/mrdwy/AI_project" },
    ],

    footer: {
      message: "工欲善其事，必先利其器。",
      copyright: "AI 时代嵌入式开发教程",
    },
  },

  mermaid: {},
});
