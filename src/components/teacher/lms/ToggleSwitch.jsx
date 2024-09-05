import PropTypes from "prop-types"

const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="hidden"
      />
      <span className="slider round"></span>
    </label>
  );
};
ToggleSwitch.propTypes={
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default ToggleSwitch;
