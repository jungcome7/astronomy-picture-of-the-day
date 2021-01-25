import React from 'react';
import { YEARS } from '../../constants';
import * as S from './DatePickerStyle';

interface DatePickerProps {
  onSetYear?: (e: any) => void;
}

function DatePicker({ onSetYear }: DatePickerProps) {
  return (
    <S.Container>
      <S.Select onChange={onSetYear}>
        {YEARS.map((year) => (
          <S.Option key={year}>{year}</S.Option>
        ))}
      </S.Select>
    </S.Container>
  );
}

export default DatePicker;
