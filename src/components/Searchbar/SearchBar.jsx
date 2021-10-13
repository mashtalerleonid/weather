import { useState } from "react";
import { Header, SearchForm, Button, Input } from "./Searchbar.styled";

export default function Searchbar({ submit, makeNotification }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === "") {
      makeNotification("Enter something");
      return;
    }

    submit(query);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter City"
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </SearchForm>
    </Header>
  );
}
