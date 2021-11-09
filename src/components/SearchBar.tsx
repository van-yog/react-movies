import React, { FC, useState } from "react";

type SearchBarProps = {
  onSumbit: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSumbit }) => {
  const [value, setValue] = useState("");

  const onSubmitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (!value) return;

    onSumbit(value);
    setValue("");
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={onSubmitForm}>
        <input
          value={value}
          onChange={onChange}
          className="search-bar__input"
        />
        <button className="search-bar__button" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
