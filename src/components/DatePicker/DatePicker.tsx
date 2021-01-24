import React from 'react';
import { YEARS } from '../../constants';
import * as S from './DatePickerStyle';

const DatePicker = () => {
  return (
    <S.Container>
      <S.Select>
        {YEARS.map((year) => (
          <S.Option key={year}>{year}</S.Option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default DatePicker;
