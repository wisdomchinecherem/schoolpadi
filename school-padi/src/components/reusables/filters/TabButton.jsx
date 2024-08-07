import PropTypes from 'prop-types';

const TabButton = ({ tabs, activeTab, onTabClick, isBorder }) => {
  return (
    <div className="flex space-x-4 justify-between px-8 mb-4 w-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-[#8A92A6] text-lg w-full rounded ${
            activeTab === tab 
              ? isBorder 
                ? 'border-b-2 border-[#3599FF]  text-accent' 
                : 'bg-accent-gradient text-white'
              : ' '
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

TabButton.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  isBorder: PropTypes.bool,
};

export default TabButton;
