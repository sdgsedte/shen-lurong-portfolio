import type { Metadata } from 'next';
import './globals.css';
import SiteEffects from './components/SiteEffects';

export const metadata: Metadata = {
  title: '沈路荣｜视觉设计师作品集',
  description: '沈路荣的视觉设计作品集，聚焦电商视觉、品牌设计、3D 渲染与 AI 设计工作流。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
