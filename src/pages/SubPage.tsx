import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SubPageProps {
  title: string;
  externalUrl: string;
}

export const SubPage = ({ title, externalUrl }: SubPageProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    navigate('/');
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

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