import PropTypes from "prop-types";

const RadioGroup = ({ options, selected, onChange, name }) => {
  return (
    <div className="flex flex-col gap-3" role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`relative flex items-center gap-3 cursor-pointer transition 
            ${!option.available ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            disabled={!option.available}
            className="peer hidden"
          />
          <div
            className={`relative w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center 
              peer-checked:border-blue-500 peer-disabled:border-gray-300`}
          ></div>
          <div className="absolute left-0 translate-x-1/2 scale-0 w-2.5 h-2.5 rounded-full bg-blue-500 peer-checked:scale-100 transition-transform" />

          <span className="text-gray-700 text-sm font-medium">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
      label: PropTypes.string.isRequired,
      available: PropTypes.bool,
    })
  ).isRequired,
  selected: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default RadioGroup;
