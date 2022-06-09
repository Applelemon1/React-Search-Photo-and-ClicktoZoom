import './InputSearch.css'

function InputSearch(props) {
  const { value, onValueChange } = props;

  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="ค้นหาโปเกม่อน"
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default InputSearch;
