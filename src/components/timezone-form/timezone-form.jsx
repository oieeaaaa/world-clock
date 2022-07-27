import React from 'react';
import { ReactComponent as X } from '../../assets/x.svg';
import { 
  StyledTimezoneForm,
  StyledForm,
  StyledLabel,
  StyledSelect,
  StyledInput,
  StyledButton,
  StyledLabelText,
  StyledLabelTextEm,
  StyledCloseBtn,
} from './timezone-form.styled';
import formatTimezone from '../../utils/formatTimezone';

const TimezoneForm = ({ 
  isOpen,
  onClose,
  onChange, 
  onAdd, 
  form,
  timezoneOptions
}) => {
  return (
    <StyledTimezoneForm $isOpen={isOpen} data-testid="modal-form">
      <StyledCloseBtn onClick={onClose}>
        <X />
      </StyledCloseBtn>
      <StyledForm onSubmit={onAdd}>
        <StyledLabel htmlFor="timezone">
          <StyledLabelText>Timezone</StyledLabelText>
          <StyledSelect 
            id="timezone" 
            name="timezone"
            onChange={onChange}
            value={form.timezone}
          >
            <option value="" disabled>Select your city</option>
            {Object.keys(timezoneOptions).map(timezone => (
              <option key={timezone} value={timezone}>
                {formatTimezone(timezone)}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="label">
          <StyledLabelText>Label {' '}
            <StyledLabelTextEm>
              (optional)
            </StyledLabelTextEm>
          </StyledLabelText>
          <StyledInput 
            id="label" 
            name="label"
            type="text" 
            onChange={onChange} 
            value={form.label} 
            maxLength={20}
          />
        </StyledLabel>
        <StyledButton type="submit">Add Timezone</StyledButton>
      </StyledForm>
    </StyledTimezoneForm>
  );
}

export default TimezoneForm;
