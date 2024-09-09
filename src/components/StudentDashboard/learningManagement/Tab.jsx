import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.name
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map(
          (tab, index) =>
            activeTab === tab.name && (
              <div key={index}>
                {tab.name === "Discussions" ? (
                  <div>
                    <textarea
                      placeholder={tab.inputPlaceholder}
                      className="w-full border p-2 rounded"
                    ></textarea>
                    <div className="mt-2">
                      <label className="text-sm text-gray-500">
                        Share with:
                      </label>
                      <div className="flex mt-2">
                        {tab.shareWithOptions.map((option, i) => (
                          <label key={i} className="mr-4 text-sm text-gray-500">
                            <input type="checkbox" className="mr-1" />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                        {tab.buttons[0].label}
                      </button>
                      <button className="px-4 py-2 bg-gray-300 rounded">
                        {tab.buttons[1].label}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p>{tab.content}</p>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      inputPlaceholder: PropTypes.string,
      shareWithOptions: PropTypes.arrayOf(PropTypes.string),
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          action: PropTypes.string.isRequired,
        })
      ),
      content: PropTypes.string,
    })
  ).isRequired,
};

export default Tabs;
