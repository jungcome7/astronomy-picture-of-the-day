import React from 'react';
import { YEARS } from '../../constants';
import useSelect from '../../hooks/useSelect';
import * as S from './DatePickerStyle';

const DatePicker = () => {
  const { onSetYear } = useSelect();
  return (
    <S.Container>
      <S.Select onChange={onSetYear}>
        {YEARS.map((year) => (
          <S.Option key={year}>{year}</S.Option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default DatePicker;
