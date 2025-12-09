import { useEffect } from 'react';

export const useWeChat = () => {
  useEffect(() => {
    // 微信分享优化
    const handleWeChatShare = () => {
      // 设置微信分享配置（如果需要的话）
      const shareConfig = {
        title: '代码链接合集',
        desc: '整合多个实用代码链接，方便快捷访问',
        link: window.location.href,
        imgUrl: '/favicon.svg'
      };

      // 在微信内置浏览器中隐藏地址栏
      if (typeof window !== 'undefined') {
        // 防止微信内置浏览器的地址栏显示
        setTimeout(() => {
          window.scrollTo(0, 1);
        }, 100);
      }
    };

    handleWeChatShare();

    // 触摸事件优化
    const handleTouchStart = (e: TouchEvent) => {
      // 防止双击缩放
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // 防止页面滚动时的橡皮筋效果
      const target = e.target as HTMLElement;
      if (target.tagName === 'IFRAME') {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
};