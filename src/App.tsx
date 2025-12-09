import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SubPage } from './pages/SubPage';
import { codeLinks } from './data/links';
import { useWeChat } from './hooks/useWeChat';

function App() {
  useWeChat(); // 使用微信适配Hook

  return (
    <BrowserRouter>
      <Routes>
        {/* 主页 */}
        <Route path="/" element={<HomePage />} />
        
        {/* 子页面路由 */}
        {codeLinks.map((link) => (
          <Route
            key={link.id}
            path={link.route}
            element={
              <SubPage
                title={link.title}
                externalUrl={link.url}
              />
            }
          />
        ))}
        
        {/* 404重定向到主页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;