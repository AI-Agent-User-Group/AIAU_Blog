import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://ai-agent-user-group.github.io/", // your site url
  title: "Ai Agent User Knowledge",
  slogan: "AIエージェントと共に創る未来",
  description: "AIエージェントユーザー会は、AIエージェントの活用と最新情報を共有し、効率的な開発やビジネス活用を目指すコミュニティです。",
  social: {
    github: "https://github.com/AI-Agent-User-Group", // leave empty if you don't want to show the github
    linkedin: "", // leave empty if you don't want to show the linkedin
    email: "", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
