import { Input } from 'components/atoms/Input/Input';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import {
  SearchBarWrapper,
  SearchResults,
  SearchWrapper,
  StatusInfo,
  SearchResultsItem,
} from './SerchBar.styles';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" />
        <SearchResults
          isVisible={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
          aria-label="results"
        >
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem
                isHighlihted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.id}
              >
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
