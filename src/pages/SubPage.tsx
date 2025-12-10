import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface SubPageProps {
  title: string;
  externalUrl: string;
}

export const SubPage = ({ title, externalUrl }: SubPageProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleBack = () => {
    navigate('/');
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openExternal = () => {
    window.location.href = externalUrl;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(externalUrl);
      alert('链接已复制，可在浏览器中粘贴打开');
    } catch {
      const ta = document.createElement('textarea');
      ta.value = externalUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      alert('链接已复制，可在浏览器中粘贴打开');
    }
  };

  useEffect(() => {
    // 如果 iframe 在超时时间内未触发 onLoad，则展示兜底
    timerRef.current = window.setTimeout(() => {
      if (isLoading) {
        setShowFallback(true);
      }
    }, 3500);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b border-gray-200 flex items-center px-4 py-3">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-800 touch-optimized active:opacity-70"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回
        </button>
        <h1 className="flex-1 text-lg font-semibold text-gray-800 text-center mr-12">{title}</h1>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">加载中...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={externalUrl}
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          title={title}
          sandbox="allow-scripts allow-same-origin allow-forms"
        />

        {showFallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 z-20">
            <div className="text-center px-4">
              <p className="text-sm text-gray-700 mb-4">该页面在当前环境可能无法内嵌打开</p>
              <div className="space-y-2">
                <button
                  onClick={openExternal}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
                >
                  直接打开原链接
                </button>
                <button
                  onClick={copyLink}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                >
                  复制链接
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 底部返回按钮 */}
      <div className="bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleBack}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 touch-optimized active:scale-95"
        >
          返回链接主页
        </button>
      </div>
    </div>
  );
};
