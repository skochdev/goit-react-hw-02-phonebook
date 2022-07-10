import s from './FilterContacts.module.css';

export default function FilterContacts({ filter, onFilter }) {
  const onFilterChange = e => {
    onFilter(e.target.value);
  };
  return (
    <input
      className={s.filterInput}
      type="text"
      name="filter"
      value={filter}
      placeholder="Filter contacts by name or number"
      onChange={onFilterChange}
    />
  );
}
