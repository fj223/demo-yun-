import { LinkCard } from '../components/LinkCard';
import { codeLinks } from '../data/links';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleLinkClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800 text-center">链接合集</h1>
        </div>
      </div>

      {/* 链接列表 */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {codeLinks.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              onClick={() => handleLinkClick(link.route)}
            />
          ))}
        </div>
      </div>

      {/* 底部信息 */}
      <div className="px-4 py-6 text-center">
        <p className="text-sm text-gray-500">点击卡片访问对应功能</p>
      </div>
    </div>
  );
};
