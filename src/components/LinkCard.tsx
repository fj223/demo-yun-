import { LinkItem } from '../types/link';

interface LinkCardProps {
  link: LinkItem;
  onClick: () => void;
}

export const LinkCard = ({ link, onClick }: LinkCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 mb-3 cursor-pointer hover:shadow-lg transition-all duration-200 touch-optimized active:scale-95"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="text-2xl mr-3">{link.icon}</div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-800 mb-1">{link.title}</h3>
          <p className="text-sm text-gray-600">{link.description}</p>
        </div>
        <div className="text-gray-400 ml-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};